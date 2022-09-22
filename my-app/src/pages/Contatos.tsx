
import "./contato.css";
export const Contatos = () =>{
  return( 
      <>
      <h1> Página de Contatos </h1>
      <h3> 
          <p> Whatsapp: (85) 9 9521-7122 / (85) 9 8182-7013</p>
          <p> Instagram: @_luizasousa0 </p>   
      </h3>
<form action="" className="luiza">
  <div className="mb-3">
    <label className="form_1">coloque seu nome</label>
    <br />
    <input type="text" className="form1" id="form1" placeholder="aqui amigão"/>
  </div>
  <div className="mb-3">
    <label className="form_2">agora seu zap</label>
    <br />
    <input type="number" className="form2" id="form2" placeholder="se liga ein"/>
  </div> <br />
  <input type="reset" value="errei perai" /> <input type="submit" value="pronto" />
  </form>
  </>
  ); 
}