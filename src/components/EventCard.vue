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
    data() {
        return {
            event: {
                id: 1,
                title: 'Beach Cleanup',
                date: 'Tues Aug 19, 2021',
                time: '6:00',
                attendees: [
                    { id: 'abc123', name: 'Ronnie James Dio' },
                    { id: 'zyx345', name: 'Ozzy Ozbourne' }
                ]
            }
        }
    },
}
</script>