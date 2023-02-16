<template>
    <div class="emptyBoard">
        <div class="emptyBoard__cell"></div>
        <div class="emptyBoard__cell"></div>
        <div class="emptyBoard__cell"></div>
        <div class="emptyBoard__cell"></div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.emptyBoard {
    height: 50%;
    width: 50%;
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(204px, 1fr));
    gap: 5px;
}
.emptyBoard__cell {
    border:2px solid black; ;
}
</style>