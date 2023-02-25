import React from "react";
import classes from "./Category.module.css";
import CategoryItem from "./CategoryItem";
const categoryList = [
  {
    image:
      "https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-category-pic4-600x600.png",
    name: "Accessories",
    quantity: 6,
  },
  {
    image:
      "https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-category-pic2-600x600.png",
    name: "Core parts",
    quantity: 8,
  },
  {
    image:
      "https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-category-pic3-600x600.png",
    name: "Peripherals",
    quantity: 5,
  },
  {
    image:
      "https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-category-pic5-600x600.png",
    name: "Printers",
    quantity: 3,
  },
  {
    image:
      "https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-category-pic1-600x600.png",
    name: "Workstations",
    quantity: 4,
  },
];

const Category = () => {
  return (
    <>
      <h3 className={classes.title}>Choose a category</h3>
      <div className={classes.container_category}>
        {categoryList.map((category, index) => {
          return (
            <CategoryItem
              key={index}
              image={category.image}
              name={category.name}
              quantity={category.quantity}
            />
          );
        })}
      </div>
    </>
  );
};

export default Category;
