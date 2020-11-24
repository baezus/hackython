function handleDisconnect() {
  //remove user profile
  clientManager.removeClient(client)

  //remove member from all chat rooms
  chatroomManager.removeClient(client)
}
