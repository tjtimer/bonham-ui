<template lang="pug">
div(class="chat-room")
  div(class="header")
    h3(v-if="showMenu === false" class="current room-name" @click="toggleMenu") {{ currentRoom.name }}
    div(class="room-options")
      ul(class="vertical")
        li(class="option")
          button(name="toggle-option" type="button" class="toggle-option") change room
          ul(v-if="showRoomList === true" class="rooms-wrapper")
            li(v-for="room in chatRoomList" v-if="room.id != currentRoom.id")
              a(class="change-to"
                @click="changeRoom(room.id)" prevent) {{ room.name }}
      ul(v-if="showReceiverList === true" class="receiver-list")
        li(v-for="receiver in currentRoom.receiverList")
          p(class="receiver-wrapper")
            img(src="receiver.avatar")
            span(class="receiver-name") {{ receiver.name }}
    button(name="close" class="close material-icons" @click="close") close
  div(class="conversation")
    ul(class="message-list")
      li(v-for="message in currentRoom.messageList")
        h6(class="time") {{ message.time }}
        div(:class="(message.author.id === account.id) ? 'message sent' : 'message received'")
          div(class="avatar")
            avatar(url="message.author.avatar")
          div(class="content") {{ message.message }}
  form(class="input-wrapper" @submit.prevent="")
    textarea(
      class="input new-message"
      v-model="newMessage"
      @input="isTyping"
      @blur="typingStopped"
      )
    button(
      type="button"
      name="send-message"
      class="material-icons send"
      @click="sendMessage"
      submit.prevent
      ) send
  div(class="message-options")
    ul(class="horizontal")
      li(class="option material-icons ")
        input(
          type="file"
          name="insert-photo"
          class="material-icons insert photo"
          value="insert_photo"
          )
        insert_photo
      li(class="option")
        button(type="button" class="material-icons insert emoticon") insert_emoticon
</template>

<script>
  export default {
    name: 'chat-room',
    data: function() {
      return {
        currentRoom: {
          id: 1,
          name: 'test',
          receiverList: [],
          messageList: [],
          newMessage: ''
        },
        chatRoomList: [],
        showReceiverList: false
      }
    },
    methods: {
      isTyping: function(event) {
        console.log('user is typing', event)
      },
      typingStopped: function(event) {
        console.log('typing stopped', event)
      },
      sendMessage: function(event) {
        console.log('should send: ', this.newMessage)
      },
      toggleMenu: function(event) {
        console.log('should toggle menu', event)
      },
      changeRoom: function(event) {
        console.log('should change to room: ', event)
      },
      close: function(event) {
        console.log('should close chat', event)
      }
    }
  }
</script>
<style lang="scss" scoped>
@import '../../assets/helpers/_variables';
.horizontal {
  display: flex;
  flex-flow: nowrap;
}
.vertical {
  display: flex;
  flex-flow: column;
}
.chat-room {
  position: fixed;
  bottom: 0;
  right: 0;
  border: 2px solid red;
  background: $green-light;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  /* max-width: 20rem; */
  height: 100%;
  /* max-height: 35rem; */
  overflow: hidden;
}
.header {
  flex: 1 2rem;
  display: flex;
  flex-flow: nowrap;
  align-items: center;
  background: $grey-dark;
  .room-name,
  .room-options {
    flex: 9 auto;
    font-size: 2rem;
  }
  .close {
    flex: 1 4rem;
    font-size: 4rem;
    /* width: 4rem; */
  }
}
.options {
  flex: 1 2rem;
  display: flex;
  flex-flow: nowrap;
  justify-content: flex-end;
}
.conversation {
  width: 100%;
  display: flex;
  flex: 12 auto;
  flex-flow: column;
  background: $blue-light;
  .time {
    flex: 1 1 ;
    background-color: $grey-dark;
    color: $blue-light;
    font-size: 0.5rem;
  }
  .message {
    display: flex;
    flex-flow: nowrap;
    &.received {
      .avatar {
        flex: 1 auto;
        order: 1;
      }
      .content {
        flex: 9 auto;
        order: 2;
      }
    }
    &.sent {
      .avatar {
        order: 2;
      }
      .content {
        order: 1;
      }
    }
  }
}
.input-wrapper {
  display: flex;
  flex-flow: nowrap;
  align-items: stretch;
  flex: 1 auto;
  .input {
    flex: 9 85%;
  }
  .send {
    flex: 1 15%;
    font-size: 4rem;
    background: white;
    color: $grey-dark;
  }
}
</style>
