<template>
<head>
   
    <!-- Morris.js CSS -->
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css">
    <!-- jQuery -->
    
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script><script>
<!-- Raphael y Morris.js -->
</script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script>
</head>

<body>

    <div>
        <h2>Ingresa datos para el gráfico</h2>
        <form id="dataForm">
            <label for="week">Número de Semana:</label>
            <input type="number" id="week" name="week" min="1" max="52" required>

            <label for="value">Valor:</label>
            <input type="number" id="value" name="value" required>

            <button type="button" id="addDataBtn">Añadir Datos</button>
            <button type="button" id="generateChartBtn">Generar Gráfico</button>
        </form>
    </div>

    <!-- Contenedor para el gráfico -->
    <div id="chart" style="height: 250px; margin-top: 20px;"></div>

</body>
</template>

<script>
$(document).ready(function() {
    // Array para almacenar los datos ingresados por el usuario
    const dataPoints = [];

    // Función para añadir un nuevo punto al gráfico
    $('#addDataBtn').on('click', function() {
        // Obtener valores del formulario
        const week = $('#week').val();
        const value = $('#value').val();

        // Verificar si los valores están completos
        if (!week || !value) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Añadir el punto al array
        dataPoints.push({ week: parseInt(week), value: parseFloat(value) });

        // Limpiar el formulario después de añadir el punto
        $('#week').val('');
        $('#value').val('');

        alert("Dato añadido. Puedes añadir más o generar el gráfico.");
    });

    // Función para generar el gráfico con Morris.js
    $('#generateChartBtn').on('click', function() {
        // Limpiar el gráfico anterior
        $('#chart').empty();

        // Crear el gráfico de líneas con Morris.js
        new Morris.Line({
            element: 'chart',
            data: dataPoints,
            xkey: 'week',
            ykeys: ['value'],
            labels: ['Valor'],
            parseTime: false,  // Desactivar el análisis de fecha, porque usaremos números de semana
            xLabelAngle: 45,   // Ajustar ángulo de etiquetas para mejorar la visualización
            resize: true
        });
    });
});
</script>
