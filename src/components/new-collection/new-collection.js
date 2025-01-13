import NewCollectionHeader from "./new-collection-header/new-collections-header";
import Cards from "./collection-cards/collection-cards";
import "./new-collection.css";
import { Link } from "react-router";
const NewCollection = () => {
  const cards_info = [
    {
      image:
        "https://img.freepik.com/free-photo/girl-white-t-shirt-brown-jacket-winter-fashion-shoot_53876-104329.jpg?t=st=1736695032~exp=1736698632~hmac=112e7f26a703f771ac8316919f04596221efff1521da9ba3471151b6c58fae7b&w=360",
      title: "Brown Jacket",
      subTitle: "Slick Fit!",
      price: 699,
      id:'1001'
    },
    {
      image:
        "https://img.freepik.com/free-photo/teenage-boys-blue-sweater-beige-streetwear-apparel-shoot_53876-111198.jpg?t=st=1736694993~exp=1736698593~hmac=736f37935d1441c5e748c39c8866e561c02d58282011aa98cc2edf3a97be5e78&w=360",
      title: "Thick Sweat-Shirt",
      subTitle: "Combo of 2 ( blue + beige )",
      price: 1499,
      id:'1002'
    },
    {
      image:
        "https://img.freepik.com/free-photo/asian-woman-orange-pastel-jacket-sportswear-apparel-full-body_53876-102150.jpg?t=st=1736695121~exp=1736698721~hmac=2456a66a2784b6d235f3b4d548e3f6262030925070ca6ca814d30c8c98657e97&w=360",
      title: "Pink jacket hoddie ",
      subTitle: "Firm-Wear",
      price: 749,
      id:'1003'
    },
    {
      image:
        "https://img.freepik.com/premium-photo/elegant-sexy-asian-woman-jeans-white-t-shirt_149155-3671.jpg?w=360",
      title: "White T-Shirt",
      subTitle: "Slick Fit!",
      price: 499,
      id:'1004'
    },
    {
      image:
        "https://img.freepik.com/premium-photo/young-cool-handsome-young-stylish-man-sunglasses-hat-holding-hands-pockets-looking-away-while-standing-against-grey-background_425904-25176.jpg?w=360",
      title: "Blue Denim Jacket",
      subTitle: "Denim",
      price: 999,
      id:'1005'
    },
  ];
  return (
    <div className="new-collection">
      <NewCollectionHeader />
      <div className="list-cards">
        {cards_info.map((item, index) => {
          return (
            <Link key={index} to={'/itemsdetail/'+item.id} style={{ textDecoration: "none", color: "inherit" }} state={{item}}>
            <Cards
              key={index}
              image={item.image}
              title={item.title}
              sub_title={item.subTitle}
              price={item.price}
            /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
