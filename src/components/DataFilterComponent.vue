<template>
<div>
    <table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>Category</th>
                <th>Value</th>
                <th>Other Data</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in dataTableData" :key="row.id">
                <td>{{ row.category }}</td>
                <td>{{ row.value }}</td>
                <td>{{ row.otherData }}</td>
            </tr>
        </tbody>
    </table>
    <!-- Totales y porcentajes -->
    <div id="totalValue"></div>
    <ul id="categoryPercentage"></ul>
</div>
</template>

  
<script>
export default {
    name: 'DataTableComponent',
    props: {
        dataTableData: {
            type: Array,
            required: true
        }
    },
    watch: {
        dataTableData: {
            immediate: true,
            handler() {
                this.calculateTotals();
            }
        }
    },
    methods: {
        calculateCounts() {
            const data = this.dataTableData; // Aquí se toma la data filtrada que le pasa el componente principal
            let totalRecords = data.length; // Total de registros después de aplicar los filtros
            const categoryCounts = {};

            // Cuenta las ocurrencias de cada categoría en los datos filtrados
            data.forEach((row) => {
                const category = row.category; // Aquí se asume que cada registro tiene una 'category'
                categoryCounts[category] = (categoryCounts[category] || 0) + 1;
            });

            // Actualiza el número total de registros en el DOM
            $('#totalRecords').text(totalRecords);

            // Calcula y muestra el porcentaje de cada categoría
            $('#categoryPercentage').empty();
            Object.keys(categoryCounts).forEach((category) => {
                const percentage = ((categoryCounts[category] / totalRecords) * 100).toFixed(2);
                $('#categoryPercentage').append(`<li>${category}: ${percentage}%</li>`);
            });
        }
    }
};
</script>
