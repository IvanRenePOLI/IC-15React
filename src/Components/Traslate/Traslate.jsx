import './Traslate.css'
function Traslate() {

    window.onload = function() {
        var form = document.getElementById('message-form');
        var messageField = document.getElementById('message');
        var messagesList = document.getElementById('messages');
        var socketStatus = document.getElementById('status');
      
        var socket = new WebSocket('ws://node-red-qqsrq-2023-05-23.mybluemix.net/ws/mywebsocket');
      
        socket.onerror = function(error) {
          console.log('Error de WebSocket: ' + error);
        };
      
        socket.onopen = function(event) {
          socketStatus.innerHTML = 'Conexión al WebSocket establecida.';
        };
      
        socket.onmessage = function(event) {
          var message = event.data;
          messagesList.innerHTML += '<div class="alert alert-primary" role="alert">Recibido: ' + message + '</div>';
        };
      
        socket.onclose = function(event) {
          socketStatus.innerHTML = 'Conexión al WebSocket cerrada.';
        };
      
        form.onsubmit = function(e) {
          var message = messageField.value;
      
          socket.send(message);
          messagesList.innerHTML = '<div class="alert alert-success" role="alert">Eviado: ' + message + '</div>';
          messageField.value = '';
          return false;
        };
    }

  

    return (
        <div className="Traslate">
              <img src="https://cdn.dribbble.com/users/1341307/screenshots/3641494/google_translate.gif" width="300" alt="logo" />

            <div className="col-md-8" style={{margin: "0 auto"}}>
                <form id="message-form" action="#" method="post">
                    <div className="form-group">
                        <h4>Traducción de texto / Segunda entrega - IC15</h4>
                        <label> Traductor universal al lenguaje Inglés</label>
                        <h6>Estatus: <span id="status" className="badge badge-primary" style={{background: "rebeccapurple"}}>Conectando...</span></h6>
                        <textarea placeholder="Escribe tu texto en español aquí..." className="form-control" id="message" required rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mb-2">Traducir texto</button>
                    </div>
                    <ul id="messages"></ul>
                </form>
            </div>
        </div>
    );
}

export default Traslate;
