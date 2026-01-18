
import React from 'react';
import '../styles/Home.css';

const Home = () => {
  const recipes = [
    { name: "Jollof Rice", img: "https://cdn.tasteatlas.com/images/dishes/41ca6dfc48714647a813a6c1333a9e94.jpg" },
    { name: "Semo and Efo Riro Soup", img: "https://i.pinimg.com/474x/5e/6c/02/5e6c02362d46dc60052336f74a3959b0.jpg" },
    { name: "Fried Plantain", img: "https://lizzyafricanfood.co.uk/wp-content/uploads/2023/01/Fried-Plantain-600x600.jpg" },
    { name: "Pounded Yam", img: "https://desirerecipes.com/wp-content/uploads/2022/02/image-24.jpg" },
    { name: "Amala", img: "https://3.bp.blogspot.com/--mQeklDLL8g/WadboHPDuTI/AAAAAAAAAdI/JGAyYBCRIBAHz4Kh4llI5g0QW1PBIgRcQCLcBGAs/s1600/images%2B%252895%2529.jpg" },
    { name: "Coconut Rice", img: "https://vegangirlsguide.com/wp-content/uploads/2024/09/coconut-rice-recipe-1725620371.jpg" },
    { name: "Fried Rice", img: "https://hips.hearstapps.com/hmg-prod/images/delish-fried-rice-020-1543875572.jpg" },
    { name: "Yam and Egg Sauce", img: "https://healthguide.ng/wp-content/uploads/2022/05/images-2022-05-29T192249.394-1-696x391.jpeg" },
    { name: "Chicken and Chips", img: "https://tse4.mm.bing.net/th/id/OIP.jrNdJPgDvlDAk_t1548cOAHaEv?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Shawarma", img: "https://th.bing.com/th/id/R.eb5b6e479c19a39b2268e5a6fb0beefd?rik=5%2fPUQC0Sr%2ffyCA&pid=ImgRaw&r=0" },
    { name: "Ice Cream", img: "https://s3-media0.fl.yelpcdn.com/bphoto/fYGMXVaXep8Lwzizyh0x3w/348s.jpg" },
    { name: "Pepper Meat", img: "https://www.jocooks.com/wp-content/uploads/2023/01/black-pepper-beef-1-18-1229x1536.jpg" },
  ];

  return (
    <div
      className="home"
      style={{
        position: 'relative',
        backgroundImage: "url('/image/kiche.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: '#fff',
        paddingTop: '50px',
        paddingBottom: '50px'
      }}
    >
      {/* Dark overlay */}
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 0
        }}
      ></div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Section */}
        <section
          className="hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '50px',
            flexWrap: 'wrap',
          }}
        >
          <div className="hero-content" style={{ flex: 1, minWidth: '300px' }}>
            <h1>Welcome to Niyemi Kitchen 🍲</h1>
            <p>Bringing authentic Nigerian flavors to your table, one recipe at a time.</p>
            <button className="explore-btn">Explore Recipes</button>
          </div>
          <img
            src="https://foodminerals.ng/wp-content/uploads/2023/11/Guide-to-Mineral-Rich-Foods-in-Nigerian-Cuisine-2.jpeg"
            alt="Delicious food"
            style={{
              width: '450px',
              height: '550px',
              objectFit: 'cover',
              borderRadius: '8px',
              flex: 1,
            }}
          />
        </section>

        {/* All Recipes on Banner */}
        <section
          className="banner-recipes"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '15px',
            marginTop: '50px',
            padding: '20px',
            backgroundColor: 'rgba(0,0,0,0.6)',
            borderRadius: '12px',
          }}
        >
          {recipes.map((recipe, index) => (
            <div
              key={index}
              style={{
                background: '#fff',
                color: '#000',
                borderRadius: '8px',
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              <img
                src={recipe.img}
                alt={recipe.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              <h3 style={{ margin: '10px 0' }}>{recipe.name}</h3>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
