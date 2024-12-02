<template>
<div class="col-lg-6">
    <div class="panel panel-default">
        <div class="panel-heading">
            Prueba proyecciones
        </div>
        <!-- /.panel-heading -->
        <div class="panel-body">

            <select name="proyecciones" v-model="selectedWeek" @change="loadCategoryTotals">
                <option value="" disabled>Selecciona una semana</option>
                <option v-for="week in weeks" :key="week.id" :value="week">
                    {{ week.startW }} - {{ week.endW }}
                </option>
            </select>

            <div>
                <p>Proyeccion:</p> <input :value="value" readonly size="3" />
                
                 
            </div>

            <div class="table-responsive">
                <table class="table table-striped" id="proyeccion">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Total</th>
                            <th>Porcentaje (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="row in categoryTotals" :key="row.Categoria">
                            <td>{{ row.Categoria }}</td>
                            <td>{{ row.Total }}</td>
                            <td>{{ row.Porcentaje || 'N/A' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- /.table-responsive -->
        </div>
        <!-- /.panel-body -->
    </div>
    <!-- /.panel -->
</div>
</template>

<script>
import apiR from "@/axios";
//import { startOfWeek, endOfWeek, formatISO } from "date-fns";
export default {

    data() {
        //  const now = new Date();
        return {
            weeks: [],
            selectedWeek: null,
            categoryTotals: [],
           // value: 0
        };
    },
    computed: {
        value() {
            // Calcula el valor dinámicamente según la semana seleccionada
            return this.selectedWeek ? parseFloat(this.selectedWeek.value || 0) : 0;
        },
    },
    async mounted() {
        await this.loadWeeks();
        this.loadCategoryTotals();
    },
    methods: {
        async loadWeeks() {
            try {
                // Servicio para obtener las semanas disponibles
                const response = await apiR.get("http://localhost:8000/api/weekTest");
                this.weeks = response.data.data;
                
                //this.value = response.data.data[0] ?.value || 0;
                //console.log(this.value);
                if (this.weeks.length > 0) {
                    this.selectedWeek = this.weeks[0]; // Selecciona la semana actual por defecto
                }
            } catch (error) {
                console.error("Error al cargar semanas:", error);
            }
        },
        async loadCategoryTotals() {
            if (!this.selectedWeek) return;

            try {
                const response = await apiR.get("http://localhost:8000/api/total", {
                    params: {
                        start_date: this.selectedWeek.startW,
                        end_date: this.selectedWeek.endW,
                    },
                });
                this.categoryTotals = response.data.data; // Actualiza los datos de la tabla                
                this.categoryTotals = response.data.data.map((total) => ({
                    ...total,
                    Porcentaje: ((total.Total / this.value) * 100).toFixed(2), // Calcula el porcentaje con dos decimales
                }));
            } catch (error) {
                console.error("Error al cargar totales de categorías:", error);
            }
        },
    },
};
</script>
