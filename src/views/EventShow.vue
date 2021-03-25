<template>
    <div>
        <h1>Showing Event #{{ id }}</h1>
    </div>
</template>

<script>
export default {
    //below we tell this component that it accepts the prop 'id'
    props: ['id']
}
</script>