import Layout from "../component/layout/Layout";

const HomePage = () => {
 
  return (
    <Layout title={"ALl Products - Best offers "}>
      {/* banner image */}
      <img style={{marginTop:'60px'}}
        src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7308a7338452882f.jpg?q=20"
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      />
     
    </Layout>
  );
};

export default HomePage;