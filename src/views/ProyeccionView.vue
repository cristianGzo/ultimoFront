<template>
<div id="wrapper">
    <div>
        <NavBarComponent />
    </div>

    <div id="page-wrapper">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Forms</h1>
            </div>
            <!-- /.col-lg-12 -->
        </div>
        <!-- /.row -->
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Basic Form Elements
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-6">

                                <h3>3 proyecciones.</h3>

                                <form role="form" @submit.prevent="creatProjection">
                                    <div class="form-group">
                                        <input type="date" v-model="form.startDate" placeholder="Fecha de inicio">
                                        <input type="date" v-model="form.endDate" placeholder="Fecha de fin">

                                        <label>Valor</label>
                                        <input class="form-control" v-model="form.value" id="productCategory">
                                        <select name="categorias" v-model="form.productionCategoryId">
                                            <option value="" disabled>Selecciona una categoría</option>
                                            <option v-for="category in categories" :key="category.id" :value="category.id">
                                                {{ category.name }}
                                            </option>
                                        </select>
                                        <p class="help-block">Example block-level help text here.</p>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Submit Button</button>
                                    <!--<button type="reset" class="btn btn-primary">Reset Button</button>-->
                                </form>

                                <h3>Modelo</h3>
                                <form role="form">
                                    <div class="form-group">
                                        <label>Text Input</label>
                                        <input class="form-control" placeholder="nombre de modelo">
                                        <p class="help-block">Example block-level help text here.</p>
                                    </div>
                                    <div class="form-group">
                                        <label>Text Input with Placeholder</label>
                                        <select id="disabledSelect" class="form-control"></select>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Submit Button</button>
                                    <!--<button type="reset" class="btn btn-primary">Reset Button</button>-->
                                </form>

                                <h3>Categoria</h3>
                                <form role="form">
                                    <div class="form-group">
                                        <label>Text Input</label>
                                        <input class="form-control" placeholder="nombre categoria">
                                        <p class="help-block">Example block-level help text here.</p>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Submit Button</button>
                                    <!--<button type="reset" class="btn btn-primary">Reset Button</button>-->
                                </form>

                                <div id="morrisPr">

                                </div>

                            </div>
                            <!-- /.col-lg-6 (nested) -->
                            <div class="col-lg-6">

                                <h1>Form Validation States</h1>
                                <form role="form">
                                    <div class="form-group has-success">
                                        <label class="control-label" for="inputSuccess">Input with success</label>
                                        <input type="text" class="form-control" id="inputSuccess">
                                    </div>
                                    <div class="form-group has-warning">
                                        <label class="control-label" for="inputWarning">Input with warning</label>
                                        <input type="text" class="form-control" id="inputWarning">
                                    </div>
                                    <div class="form-group has-error">
                                        <label class="control-label" for="inputError">Input with error</label>
                                        <input type="text" class="form-control" id="inputError">
                                    </div>
                                </form>

                            </div>
                            <!-- /.col-lg-6 (nested) -->
                        </div>
                        <!-- /.row (nested) -->
                    </div>
                    <!-- /.panel-body -->
                </div>
                <!-- /.panel -->
            </div>
            <!-- /.col-lg-12 -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /#page-wrapper -->

</div>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import apiR from '@/axios';

export default {
    components: {
        NavBarComponent  
    },
    data() {
        return {
            categories: [],
            projecs: [],
            form: {
                startDate: '',
                endDate: '',
                productionCategoryId: 0,
                value: 0,

            }
        };
    },
    methods: {
        //para select
        async getCategorias() {
            try {
                const response = await apiR.get('http://localhost:8000/api/getCat');
                console.log('Data obtenida:', response.data.data);
                this.categories = response.data.data;
            } catch (error) {
                console.log('Error al obtener datos', error);
            }
        },
        //para insert
        async creatProjection() {
            try {
                const response = await apiR.post('http://localhost:8000/api/create', this.form);
                console.log('created', response.data);
            } catch (error) {
                console.log('Hubo error', error);
            }
        },
        //para charts
        async getProyections() {
            try {
                const response = await apiR.get('http://localhost:8000/api/salesProjection');
                this.projecs = response.data.data.map(item => ({
                    label: item.startDate,
                    value: item.value
                }));
                this.renderCharPr();
            } catch (error) {
                console.log('error al obtener proyecciones', error);
            }
        },

        //crear char Projec
        renderCharPr() {
            $('#morrisPr').empty();
            /* eslint-disable no-undef */
            new Morris.Bar({
                element: 'morrisPr',
                data: this.projecs,
                xkey: 'label',
                ykeys: ['value'],
                labels: ['Total'],
                resize: true,
                barColors: ['#0b62a4'],
            });
        },

        //era ejemplo insert, no se utiliza aqui
        async submitForm() {
            try {
                const response = await apiR.post('http://localhost:8000/api/brand', this.form);
                console.log('Datos insertados:', response.data);
                this.resetForm();
            } catch (error) {
                console.error('Error al enviar', error)
            }
        },
        resetForm() {
            this.form.name = '';
        }
    },

    mounted() {
        this.getCategorias();
        this.getProyections();
    }
}
</script>
