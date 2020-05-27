import Handler from "../handlerState/Handler";
const Base_api = Handler.server();
class Api {
  async pedirCodigo(telefono) {
    try {
      let requestOptions = {
        method: "POST",
        redirect: "follow",
        mode: "cors",
        body: JSON.stringify({
          telefono,
        }),
        headers: { "Content-Type": "application/json" },
      };
      let query = await fetch(
        `${Base_api}api/restaurant/mandarCodigo`,
        requestOptions
      );
      let response = await query.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  async register(x, passU, name, passApp) {
    //listo
    try {
      let requestOptions = {
        method: "POST",
        redirect: "follow",
        mode: "cors",
        body: JSON.stringify({
          x,
          passU,
          name,
          passApp,
        }),
        headers: { "Content-Type": "application/json" },
      };
      let query = await fetch(
        `${Base_api}api/restaurant/register`,
        requestOptions
      );
      let queryJson = await query.json();
      return queryJson;
    } catch (error) {
      console.log(
        "Esto es un error atrapado en la función register de la clase api: " +
          error
      );
    }
  }
}
export default new Api();
