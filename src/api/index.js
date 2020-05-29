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
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async verificarCodigo(telefono, codigo) {
    try {
      let requestOptions = {
        method: "POST",
        redirect: "follow",
        mode: "cors",
        body: JSON.stringify({
          telefono,
          codigo,
        }),
        headers: { "Content-Type": "application/json" },
      };
      let query = await fetch(
        `${Base_api}api/restaurant/verify`,
        requestOptions
      );
      let response = await query.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async register(name, category, address, avgTime, phone) {
    //phone includes +57
    try {
      let requestOptions = {
        method: "POST",
        redirect: "follow",
        mode: "cors",
        body: JSON.stringify({
          name,
          category,
          address,
          avgTime,
          phone,
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
  async addMeal(
    imagen,
    restaurant,
    name,
    weight,
    calories,
    people,
    price,
    description
  ) {
    try {
      const data = new FormData();
      data.append("file", imagen);
      data.append("restaurante", restaurant);
      data.append("nombre", name);
      data.append("peso", weight);
      data.append("calorias", calories);
      data.append("numPersonas", people);
      data.append("precio", price);
      data.append("descripcion", description);
      const requestOptions = {
        method: "POST",
        body: data,
        redirect: "follow",
      };
      let query = await fetch(
        "http://localhost:8080/api/restaurant/nuevoProducto/",
        requestOptions
      );
      let queryJson = await query.json();
      return queryJson;
    } catch (error) {
      console.log(
        "Esto es un error atrapado en la función addMeal de la clase api: " +
          error
      );
    }
  }
}
export default new Api();
