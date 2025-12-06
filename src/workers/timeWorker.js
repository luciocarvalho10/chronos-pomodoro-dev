self.onmessage = function (e) {
  console.log('worker recebeu: ', e.data)

  self.postMessage('olá você aí!')
}