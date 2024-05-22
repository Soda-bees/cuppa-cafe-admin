import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import images from "../../asset/index";
import { useNavigate } from "react-router-dom";


export default function AddItem() {
  const [itenName, setItenName] = useState("");
  const [itenDescription, setItenDescription] = useState("");

  const navigate = useNavigate();


  const [size, setSize] = useState("");
  const [Price, setPrice] = useState("");
  const [Serves, setServes] = useState("");

  const [filterOptionOne, setFilterOptionOne] = useState("");
  const [filterOptionPriceOne, setFilterOptionPriceOne] = useState("");

  const [chooseBtn, setChooseBtn] = useState(false);

  const [todos, setTodos] = useState([
    {
      size: "",
      price: "",
      serves: "",
    }
  ]);
  const addTodo = () => {
    const newTodo = {
      size: "",
      price: "",
      serves: "",
    };
    setTodos([...todos, newTodo]);
  };

  const handleTodoChange = (index, field, value) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = { ...updatedTodos[index], [field]: value };
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const [filterTodo, setFilterTodo] = useState([{
    name: "",
    price: "",
  }]);

  const addFilterTodo = () => {
    // Create a new todo object and add it to the todos array
    const newFilterTodo = {
      name: "",
      price: "",
    };
    setFilterTodo([...filterTodo, newFilterTodo]);
  };

  const handleFilterTodoChange = (index, field, value) => {
    const updatedFilterTodos = [...filterTodo];
    updatedFilterTodos[index] = {
      ...updatedFilterTodos[index],
      [field]: value,
    };
    setFilterTodo(updatedFilterTodos);
  };

  const deleteFilterTodo = (index) => {
    const updatedFilterTodos = [...[...filterTodo]];
    updatedFilterTodos.splice(index, 1);
    setFilterTodo(updatedFilterTodos);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const [filterName, setFilterName] = useState("")
  const [selectBtn, setSelectBtn] = useState(false);
  const [addSpecifications, setAddSpecifications] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.headingWrapper}>
        <div className={style.backBtn} onClick={() => {
          navigate('/menu')
        }}>
          <img className={style.backArrow} src={images.backArrow} />
        </div>
        <div className={style.heading}>Add Item</div>
        <div className={style.btn}>Save</div>
      </div>
      <div className={style.addItem}>
        <div className={style.addItemLeft}>
          <div className={style.addItemDetails}>
            <div className={style.InputImg}>
              <label for="img" className={style.uploadImage}>
                <img
                  src={
                    selectedImage
                      ? URL.createObjectURL(selectedImage)
                      : images.uploadImgIcon
                  }
                  className={selectedImage ? style.seletedImg : style.icon}
                  alt="Upload Image"
                />
                <input
                  id="img"
                  className={style.inputImg}
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={handleImageChange}
                />
                {/* <img src={images.uploadImgIcon} />
                                <input className={style.inputImg} id="img" type='file' accept="image/png,image/jpeg" /> */}
              </label>
              <div className={style.uploadImgtext}>
                <img className={style.uploadImg} src={images.uploadImg} />
                Upload Images
              </div>
            </div>
            <div className={style.textFeild}>
              <div className={style.inputWrapper}>
                <div className={style.inputHeading}>Item Name</div>
                <input
                  className={style.textInput}
                  type="text"
                  onChange={(e) => setItenName(e.target.value)}
                />
              </div>
              <div className={style.inputWrapper}>
                <div className={style.inputHeading}>Description</div>
                <textarea
                  cols={"10"}
                  rows={"3"}
                  className={style.textInputTwo}
                  onChange={(e) => setItenDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className={style.rowHeadingWrapper}>
            <div className={style.headingWrapperTwo}>
              <div className={style.infoheading}>Size</div>
              <div className={style.infoheading}>Price</div>
              <div className={style.infoheading}>Serves</div>
            </div>

          </div>

          {todos.map((todo, index) => (
            <div className={style.row} key={index}>
              <div onClick={() => deleteTodo(index)} className={style.circle}>
                <div className={style.greenLine}></div>
              </div>

              <input
                className={style.textInputThree}
                type="text"
                onChange={(e) =>
                  handleTodoChange(index, "size", e.target.value)
                }
                value={todo.size}
              />


              <input
                className={style.textInputThree}
                type="text"
                onChange={(e) =>
                  handleTodoChange(index, "price", e.target.value)
                }
                value={todo.price}
              />


              <input
                className={style.textInputThree}
                type="text"
                onChange={(e) =>
                  handleTodoChange(index, "serves", e.target.value)
                }
                value={todo.serves}
              />

            </div>
          ))}
          <div className={style.btnWrapper}>
            <div className={style.btnTwo} onClick={addTodo}>
              <img className={style.plusIcon} src={images.plusIcon} />
              Add interval
            </div>
          </div>
        </div>
        <div className={style.addItemRight}>
          <div className={style.specHeading}>
            Add Specifications
            <img className={style.rightArrow} src={images.rightArrow}  />
          </div>


          <div className={style.filteritem}>
            <div className={style.filter}>
              <div className={style.filterName}>Filter Name</div>
              <div>
              <input
                className={style.input}
                type="text"
                onChange={(e) => setFilterName(e.target.value)}
              />
              </div>
            </div>
            <div>
              <div className={style.filterOption}>Filter Options</div>
              <div className={style.rowHeadingWrapper}>
                <div className={style.headingWrapperThree}>
                  <div className={style.infoheadingTwo}>Name</div>
                  <div className={style.infoheadingTwo}>Extra Charges</div>
                </div>
              </div>
              {filterTodo.map((index, todo) => (
                <div className={style.row} key={index}>
                  <div
                    onClick={() => deleteFilterTodo(index)}
                    className={style.circle}
                  >
                    <div className={style.greenLine}></div>
                  </div>

                  <input
                    className={style.textInputFour}
                    type="text"
                    onChange={(e) =>
                      handleFilterTodoChange(index, "name", e.target.value)
                    }
                    value={todo.name}
                  />


                  <input
                    className={style.textInputFour}
                    type="text"
                    onChange={(e) =>
                      handleFilterTodoChange(index, "price", e.target.value)
                    }
                    value={todo.price}
                  />

                </div>
              ))}
            </div>
            <div className={style.btnWrapperTwo}>
              <div className={style.btnThree} onClick={addFilterTodo}>
                <img className={style.plusIcon} src={images.plusIcon} />
                Add option
              </div>
            </div>
            <div className={style.required}>
              Make it required
              {selectBtn ? (
                <div
                  className={style.ovalBtn}
                  onClick={() => setSelectBtn(!selectBtn)}
                >
                  <div className={style.whiteBtn}></div>
                </div>
              ) : (
                <div
                  className={style.notSelectedBtn}
                  onClick={() => setSelectBtn(!selectBtn)}
                >
                  <div className={style.notSelectedgreen}></div>
                </div>
              )}
            </div>
            <div className={style.actionWrapper}>
              <div className={style.actionHeading}>Action</div>
              <div className={style.chooseWrapper}>
                <div
                  onClick={() => setChooseBtn(!chooseBtn)}
                  className={chooseBtn ? style.chooseMany : style.chooseOne}
                >
                  Choose One
                </div>
                <div
                  onClick={() => setChooseBtn(!chooseBtn)}
                  className={chooseBtn ? style.chooseOne : style.chooseMany}
                >
                  Choose Many
                </div>
              </div>
            </div>
            <div className={style.btnWrapperFour}>
              <div className={style.btn}>Add option</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
