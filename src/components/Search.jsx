import React from "react";

function SearchData() {
  const [data, setData] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");
  const [searchType, setSearchType] = React.useState("users");

  const handleSearch = React.useCallback((event) => {
    event.preventDefault();
    const apiUrl = searchType === "users" ? "http://localhost:3017/api/users" : "http://localhost:3017/api/products";

    fetch(`${apiUrl}?q=${keyword}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.data) {
          setData(data.data);
        } else {
          setData([]);
        }
      })
      .catch(err => { console.log(err); });
  }, [keyword, searchType]);

  return (
    <div>
      <div>
        {/* Formulario de búsqueda */}
        <form onSubmit={handleSearch}>
          <div>
            <label htmlFor="">Buscar:</label>
            <input type="text" onChange={(event) => setKeyword(event.target.value)} />
          </div>
          <div>
            <label htmlFor="">Buscar en:</label>
            <select value={searchType} onChange={(event) => setSearchType(event.target.value)}>
              <option value="users">Usuarios</option>
              <option value="products">Productos</option>
            </select>
          </div>
          <button>Buscar</button>
        </form>
      </div>
      <div>
        <h2>Resultados de búsqueda:</h2>
      </div>
      {/* Resultados de la búsqueda */}
      {
        data.length > 0 && data.map((item, index) => (
          <div key={index}>
            <div>
              <h5>{item.name}</h5>
            </div>
            <div>
              {searchType === "users" ? (
                <img src={item.avatar || "https://via.placeholder.com/150"} alt={item.name} style={{ width: '100px', height: '100px' }} />
              ) : (
                <img src={item.photo1 || "https://via.placeholder.com/150"} alt={item.name} style={{ width: '100px', height: '100px' }} />
              )}
            </div>
            <div>
              <p>{searchType === "users" ? item.email : item.description}</p>
            </div>
          </div>
        ))
      }
      {data.length === 0 && <div>No se encontraron resultados</div>}
    </div>
  );
}

export default SearchData;