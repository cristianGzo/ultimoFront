<template>
<div id="wrapper">
    <!-- Navigation -->
    <div>
        <NavBarComponent />
    </div>

    <div id="page-wrapper">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Tables</h1>
            </div>
            <!-- /.col-lg-12 -->
        </div>
        <!-- /.row -->
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        DataTables Advanced Tables
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">
                        <input type="text" v-model="filter1and2" placeholder="char1-2" size="3" maxlength="2" />
                        <input type="text" v-model="filterPos3" placeholder="char3" size="3" maxlength="1">
                        <input type="text" v-model="filterPos7" placeholder="char7" size="3" maxlength="1" />

                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Serial_Number</th>
                                        <th>Build_code</th>
                                        <th>Create_Ts</th>
                                        <th>ShipSerial</th>
                                        <th>ShipLabelTimeStamp</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                        <!-- /.table-responsive -->
                        <div class="well">
                            <h4>DataTables Usage Information</h4>
                            <p>DataTables is a very flexible, advanced tables plugin for jQuery. In SB Admin, we are using a specialized version of DataTables built for Bootstrap 3. We have also customized the table headings to use Font Awesome icons in place of images. For complete documentation on DataTables, visit their website at <a target="_blank" href="https://datatables.net/">https://datatables.net/</a>.</p>
                            <a class="btn btn-default btn-lg btn-block" target="_blank" href="https://datatables.net/">View DataTables Documentation</a>
                        </div>
                    </div>
                    <!-- /.panel-body -->
                </div>
                <!-- /.panel -->
            </div>
            <!-- /.col-lg-12 -->
        </div>
        <!-- /.row -->
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Kitchen Sink
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">
                        <input type="number" v-model="total" placeholder="Ingresa el total" @input="calculatePercentages" />
                        <input type="date" v-model="startDate" placeholder="Fecha de inicio" @change="() => { loadTotal(); loadReport(); }">
                        <input type="date" v-model="endDate" placeholder="Fecha de fin" @change="() => { loadTotal(); loadReport(); }">
                        <input type="time" v-model="startTime" placeholder="Hora de inicio">
                        <input type="time" v-model="endTime" placeholder="Hora de fin">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover" id="totales">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Total</th>
                                        <th v-if="showPercentage">Porcentaje</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                        <!-- /.table-responsive -->
                    </div>
                    <!-- /.panel-body -->
                </div>
                <!-- /.panel -->
            </div>
            <!-- /.col-lg-6 -->
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Basic Table
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Categoria</th>
                                        <th>Total</th>
                                        <th>Porcentaje (%)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="category in filteredCategories" :key="category.Categoria">
                                        <td>{{ category.Categoria }}</td>
                                        <td>{{ category.Total }}</td>
                                        <td>{{ category.Porcentaje }}</td>
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
            <!-- /.col-lg-6 -->
        </div>
        <!-- /.row -->
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Prueba proyecciones
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">

                        <select name="proyecciones" v-model="selectedItem">
                            <option value="" disabled>Selecciona una categoría</option>
                            <option v-for="item in items" :key="item.id" :value="item.id">
                                {{ item.startDate }}
                            </option>
                        </select>

                        <div class="table-responsive">
                            <table class="table table-striped" id="proyeccion">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Total</th>
                                        <th v-if="showPercentage">Porcentaje</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                        <!-- /.table-responsive -->
                    </div>
                    <!-- /.panel-body -->
                </div>
                <!-- /.panel -->
            </div>
            <!-- /.col-lg-6 -->
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Bordered Table
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">
                        <div class="table-responsive table-bordered">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
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
            <!-- /.col-lg-6 -->
        </div>
        <!-- /.row -->
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Hover Rows
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
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
            <!-- /.col-lg-6 -->
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Context Classes
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="success">
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
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
            <!-- /.col-lg-6 -->
        </div>

        <div>
            <h1>Dashboard</h1>
            <!-- Aquí usas el componente -->
            <WeeklySales />
        </div>

        <!-- /.row -->
    </div>
    <!-- /#page-wrapper -->
</div>
</template>

<script>
// eslint-disable-next-line
import DataTableComponent from '@/components/DataFilterComponent.vue';
import WeeklySales from "@/components/ProyeccionTableComponent.vue";
import NavBarComponent from '@/components/NavBarComponent.vue';
import apiR from '@/axios';

// $(document).ready(init);
export default {
    components: {
        NavBarComponent,
        WeeklySales,
    },
    data() {
        return {
            //filtros
            filterPos3: "",
            filterPos7: "",
            filter1and2: "",
            table: null,

            //tbl total
            categorias: [],
            total: 0,
            showPercentage: false,
            startDate: this.getDefaultStartDate(),
            endDate: this.getCurrentDate(),
            startTime: '',
            endTime: '',

            //componentTable
            dataTableData: [],
            filteredTotal: 0, // Total de registros que cumplen con los filtros
            filteredCategories: [],

            //proyeccion
            items: [],
            selectedItem: "",
        };
    },

    watch: {
        filterPos3() {
            this.table.draw();
        },
        filterPos7() {
            this.table.draw();
        },
        filter1and2() {
            this.table.draw();
        },
    },
    mounted() {
        this.loadReport(),
            this.loadTotal(),
            this.loadProyec()
    },
    methods: {
        async loadReport() {
            try {
                const response = await apiR.get('http://localhost:8000/api/reports/', {
                    params: {
                        start_date: this.startDate,
                        end_date: this.endDate,
                        start_time: this.startTime,
                        end_time: this.endTime,
                    },
                });
                this.initDataTable(response.data.data);

            } catch (error) {
                console.error('error en la request', error)

            }
        },

        initDataTable(data) {
            if (this.table) {

                this.table.clear().rows.add(data).draw();
            } else {
                const vm = this;
                this.table = $('#dataTables-example').DataTable({
                    data: data,
                    columns: [{
                            data: 'SERIAL_NUMBER'
                        },
                        {
                            data: 'BUILD_CODE'
                        },
                        {
                            data: 'CREATE_TS'
                        },
                        {
                            data: 'ShipSerial'
                        },
                        {
                            data: 'ShipLabelTimeStamp'
                        },
                    ],

                    initComplete: function () {

                        vm.initialTotal = data.length;
                        // Agrega filtros personalizados usando `$.fn.dataTable.ext.search.push`
                        $.fn.dataTable.ext.search.push(function (settings, rowData) {
                            if (settings.nTable.id !== 'dataTables-example') {
                                return true; // Si no es la tabla correcta, omitir el filtro
                            }

                            const code = rowData[1];
                            const pos3Filter = vm.filterPos3;
                            const pos7Filter = vm.filterPos7;
                            const pos1Filter = vm.filter1and2;

                            // Condiciones de filtro en posiciones 3 y 7
                            const matchPos3 = pos3Filter ? code[2] === pos3Filter : true;
                            const matchPos7 = pos7Filter ? code[6] === pos7Filter : true;
                            const matchPos1 = pos1Filter ? code.substring(0, 2) === pos1Filter : true;

                            if (vm.table) {
                                vm.calculateFilteredTotals();
                            }

                            return matchPos3 && matchPos7 && matchPos1; // Retorna verdadero si coinciden ambos filtros
                        });
                    },
                    drawCallback: function () {
                        if (vm.table) {
                            vm.calculateFilteredTotals();
                        }
                    },
                });
            }

        },

        async loadTotal() {
            try {
                const response = await apiR.get('http://localhost:8000/api/total', {
                    params: {
                        start_date: this.startDate,
                        end_date: this.endDate,
                        start_time: this.startTime,
                        end_time: this.endTime,
                    },
                });
                this.categorias = response.data.data;

                this.categorias = this.categorias.map(item => ({
                    ...item,
                    Porcentaje: 0
                }));

                if (!this.tableTotales) {
                    this.initializeTableTotal();
                } else {

                    this.tableTotales.clear().rows.add(this.categorias).draw();
                }

            } catch (error) {
                console.log("FUNCIONA");
                console.error('Error al cargar los datos', error);
            }
        },
        initializeTableTotal() {
            //const vm = this;
            this.tableTotales = $('#totales').DataTable({
                data: this.categorias,
                columns: [{
                        data: 'Categoria'
                    },
                    {
                        data: 'Total'
                    },
                    {
                        data: 'Porcentaje',
                        visible: false
                    },
                ],
            });
        },
        async loadProyec() {
            try {
                const response1 = await apiR.get('http://localhost:8000/api/salesProjection');
                /*const response = await apiR.get('http://localhost:8000/api/total', {
                    params: {
                        start_date: this.startDate,
                        end_date: this.endDate,
                        start_time: this.startTime,
                        end_time: this.endTime,
                    },
                });*/

                this.items = response1.data.data;
                if (!this.tableTotales) {
                    this.initializeTblProycPrueba();
                } else {

                    this.tableTotales.clear().rows.add(this.categorias).draw();
                }

            } catch (error) {
                console.error('Error al cargar los datos', error);
            }
        },

        initializeTblProycPrueba() {
            //const vm = this;
            this.tableTotales = $('#proyeccion').DataTable({
                data: this.categorias,
                columns: [{
                        data: 'Categoria'
                    },
                    {
                        data: 'Total'
                    },
                    {
                        data: 'Porcentaje',
                        visible: false
                    },
                ],
            });
        },

        calculatePercentages() {
            if (this.total > 0) {
                this.categorias = this.categorias.map((item) => {
                    return {
                        ...item,
                        Porcentaje: ((item.Total / this.total) * 100).toFixed(2),
                    };
                });
                this.tableTotales.clear().rows.add(this.categorias).draw();
                this.showPercentage = true; // Muestra la columna de porcentaje
                this.tableTotales.column(2).visible(true); // Asegúrate de que la columna de porcentaje esté visible
            } else {

                this.categorias = this.categorias.map((item) => {
                    return {
                        ...item,
                        Porcentaje: 0,
                    };
                });
                this.tableTotales.clear().rows.add(this.categorias).draw();
                this.showPercentage = false; // Oculta la columna de porcentaje
                this.tableTotales.column(2).visible(false); // Asegúrate de que la columna de porcentaje esté oculta
            }
        },
        getDefaultStartDate() {
            const date = new Date();
            date.setMonth(date.getMonth() - 1); // un mes atrás
            return date.toISOString().split('T')[0]; // 'YYYY-MM-DD'
        },
        getCurrentDate() {
            const date = new Date();
            return date.toISOString().split('T')[0]; // 'YYYY-MM-DD'
        },
        calculateFilteredTotals() {
            const filteredData = this.table.rows({
                filter: 'applied'
            }).data().toArray();
            this.filteredTotal = filteredData.length;

            const categoryCounts = filteredData.reduce((acc, row) => {
                const category = row.BUILD_CODE; // Ajusta según tu campo de categoría
                acc[category] = (acc[category] || 0) + 1;
                return acc;
            }, {});

            this.filteredCategories = Object.keys(categoryCounts).map(category => ({
                Categoria: category,
                Total: categoryCounts[category],
                Porcentaje: ((categoryCounts[category] / this.initialTotal) * 100).toFixed(2),
            }));
        },

        calculateCurrentWeek() {

        }

    },
    //COMPONENT
    computed: {
        filteredData() {
            // Obtiene solo los datos aplicados con filtros
            return this.table.rows({
                filter: 'applied'
            }).data().toArray();
        }
    },

};
</script>
