export default function HomePage() {
  return (
    <>
      <div className="jumbo">
        <div className="cont">
          <h1 className="text-center pt-50 ">
            Pizza <br />
            Express Delivery
          </h1>
          <h3 className="text-center pt-20">Via Monte Napoleone , Milano</h3>
          <div className="btn">
            {" "}
            <button className="btn-pre">Prenota</button>
            <button className="btn-men">Esplora menù</button>
          </div>
        </div>
      </div>
      <div className="rece">
        <h1 className=" pt-30 text-center">Recensioni</h1>
        <div className="img-rece">
          <img className="w-30" src="public\img\logo.png" alt="" />
        </div>
        <strong>
          <h3 className="text-center pt-10">ECCELENTE</h3>
        </strong>
        <div className="stars">
          <img
            className="w-50 justify-center"
            src="public\img\pngegg.png"
            alt=""
          />
        </div>

        <p className="text-center pt-5 pb-20">
          <strong>In base a 300 recensioni</strong>
        </p>
      </div>
    </>
  );
}
