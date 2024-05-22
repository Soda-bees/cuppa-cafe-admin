import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import images from '../../asset'
import { useLocation, useNavigate } from 'react-router-dom';

export default function ItemDetails() {

    const navigate = useNavigate()

    const location = useLocation();
    const [item, setItem] = useState()

    useEffect(() => {
        if (location.state && location.state.item) {
            setItem(location.state.item);
            console.log("-==-offer details=-", location?.state?.item);
        }
    }, [location.state]);




    const [itenName, setItenName] = useState('')
    const [itenDescription, setItenDescription] = useState('')
    const [specification, setSpecification] = useState(false)
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


    return (
        <div className={style.container}>
            <div className={style.headingWrapper}>
                <div className={style.backBtn} onClick={() => navigate('/menu')}>
                    <img className={style.backArrow} src={images.backArrow}
                    />
                </div>
                <div className={style.heading}>
                    Item Details
                </div>

                <div className={style.btn}>
                    Edit Items
                </div>
            </div>
            <div className={style.itemDetailsWrapper}>
                <div className={style.addItemLeft}>
                    <div className={style.addItemDetails}>
                        <div>
                        <img className={style.itemImg} src={item?.images} />
                        </div>
                        <div className={style.infoWrapper}>
                            <div className={style.textFeild}>
                                <div className={style.inputHeading}>Item Name</div>
                                <input className={`${style.textInput}`} type='text' onChange={(e) => setItenName(e.target.value)} />
                            </div>
                            <div className={style.textFeildTwo}>
                                <div className={style.inputHeading}>Description</div>
                                <textarea
                                    className={`${style.textInputTwo}`} type='text' onChange={(e) => setItenDescription(e.target.value)}
                                    rows={5}
                                />
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
                </div>
                <div className={style.addItemRight}>
                    <div className={style.specHeadingWrapper}>
                        <div className={style.specHeading}>
                            Specifications
                        </div>
                    </div>

                    <div className={style.filteritem} >
                        <div className={style.filter}>
                            <div>
                                <div className={style.filterlable}> Filter Name</div>
                            </div>
                            <div className={style.filterNameWrapper} onClick={() => setSpecification(!specification)}>
                                <div className={style.filterName}>Milk</div>
                                <img className={style.menuDot} src={images.downArrow} />
                            </div>

                        </div>
                        {specification &&
                            <div>
                                <div className={style.rowHeadingWrapper}>
                                    <div className={style.headingWrapperThree}>
                                        <div className={style.infoheadingTwo}>Name</div>
                                        <div className={style.infoheadingTwo}>Extra Charges</div>
                                    </div>
                                </div>
                                {filterTodo.map((index, todo) => (
                                    <div className={style.row} key={index}>
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
                        }


                        {/* <div>
                            <div className={style.headingWrapperThree}>
                                <div className={style.infoheadingTwo}>Name</div>
                                <div className={style.infoheadingTwo}>Extra Charges</div>
                            </div>
                            <div className={style.row}>
                                <div><input className={style.textInputFour} value='Whole Milk' type='text' /></div>
                                <div><input className={style.textInputFour} value='$4.50' type='text' /></div>
                            </div>
                            <div className={style.row}>
                                <div><input className={style.textInputFour} value='2% Milk' type='text' /></div>
                                <div><input className={style.textInputFour} value='$4.50' type='text' /></div>
                            </div>
                            <div className={style.row}>
                                <div><input className={style.textInputFour} value='Skim Milk' type='text' /></div>
                                <div><input className={style.textInputFour} value='$4.50' type='text' /></div>
                            </div>
                            <div className={style.row}>
                                <div><input className={style.textInputFour} value='Almond Milk' type='text' /></div>
                                <div><input className={style.textInputFour} value='$4.50' type='text' /></div>
                            </div>
                            <div className={style.row}>
                                <div><input className={style.textInputFour} value='Lactose-Free Milk' type='text' /></div>
                                <div><input className={style.textInputFour} value='$4.50' type='text' /></div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
