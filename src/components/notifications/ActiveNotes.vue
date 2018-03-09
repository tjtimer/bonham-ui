<template lang="pug">
  #active-notes(v-if="notifications.activeNoteIds.length > 0")
    ul.column
      li(v-for="note in activeNotes")
        .note.column(:class="note.topic")
          h4 {{ note.message }}
        .options.row
          button(name="archive" @click="archiveNote(note)") archive
          button(name="delete" @click="deleteNote(note)") delete
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "active-notes",
  computed: {
    ...mapState(["notifications"]),
    ...mapGetters({ activeNotes: "notifications/activeNotes" })
  },
  methods: {
    ...mapActions({
      archiveNote: "notifications/archiveNote",
      deleteNote: "notifications/deleteNote"
    })
  },
  beforeMount() {
    this.$store.dispatch("notifications/setup");
  }
};
</script>

<style lang="scss" scoped>
#active-notes {
  position: fixed;
  top: 0;
  right: 10%;
  h4 {
    padding: 0.7rem 1.2rem;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
  .note {
    box-shadow: 0 1rem 2rem black;
  }
  .warning {
    background: red;
    color: wheat;
  }
}
</style>

