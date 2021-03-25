<template>
    <div>
        <hr>
        <span>@{{ event.time }} {{ event.date }}</span>
        <router-link :to="{name: 'event-show', params: {id: '1'}}">
            <h4>{{ event.title }}</h4>
        </router-link>
        <span>{{ event.attendees.length }} Attendees</span>
        <hr>
    </div>
</template>

<script>
export default {
    props: {
        event: Object
    }
}
</script>