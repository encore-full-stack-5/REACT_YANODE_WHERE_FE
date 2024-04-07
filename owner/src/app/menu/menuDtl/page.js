import common from "/src/resources/common.module.css";
import axios from "axios";
import Image from "next/image";
import Input from "/src/app/component/Input";
import Textarea from "/src/app/component/Textarea";
import { useEffect, useState } from "react";
const obj = {
  name: "",
  price: "",
};
export default function menuDtl(props) {
  // props
  const { clickModal, menuDtl, saveModal, getData, deleteModal } = props;

  // state
  const [status, setStatus] = useState("");
  const [option, setOption] = useState([]);

  const putData = async (req, res) => {
    let soldOut = 0;
    let exposure = 1;

    if (status === "2") {
      soldOut = 1;
      exposure = 1;
    } else if (status === "3") {
      soldOut = 0;
      exposure = 0;
    }
    try {
      const response = await axios.put(
        "http://220.78.7.18:3001/owners/products",
        {
          data: [
            menuDtl.GDS_ID,
            document.getElementById("menuName").value,
            document.getElementById("menuDescision").value,
            document.getElementById("menuPrice").value,
            soldOut,
            exposure,
          ],
        }
      );
      console.log(response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postData = async (req, res) => {
    let soldOut = 0;
    let exposure = 1;
    if (status === "2") {
      soldOut = 1;
      exposure = 1;
    } else if (status === "3") {
      soldOut = 0;
      exposure = 0;
    }
    try {
      const response = await axios.post(
        "http://220.78.7.18:3001/owners/products",
        {
          data: [
            "25",
            document.getElementById("menuName").value,
            document.getElementById("menuDescision").value,
            document.getElementById("menuPrice").value,
            soldOut,
            exposure,
          ],
        }
      );
      console.log(response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteData = async (req, res) => {
    try {
      const response = await axios.get(
        `http://220.78.7.18:3001/owners/products/del/${menuDtl.GDS_ID}`
      );
      console.log(response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addOption = () => {
    const newOption = { ...obj };
    setOption([...option, newOption]);
  };

  const deleteOption = (i) => {
    // debugger;
    const spliceOption = option.filter((el, ind) => ind !== i);

    setOption(spliceOption);
  };
  //function
  const menuStatus = () => {
    if (menuDtl.SOLDOUT_YN === "0" && menuDtl.EXPSR_YN === "1") setStatus("1");
    if (menuDtl.SOLDOUT_YN === "1" && menuDtl.EXPSR_YN === "1") setStatus("2");
    if (menuDtl.SOLDOUT_YN === "0" && menuDtl.EXPSR_YN === "0") setStatus("3");
  };
  const chageStatusSelect = () => {
    const status = document.getElementById("status");
    return setStatus(status.value);
  };

  const onChange = (e, i) => {
    const { name, value } = e.target;
    const mapOption = option.map((el, index) =>
      index === i ? { ...el, [name]: value } : el
    );
    setOption(mapOption);
  };

  const clickSave = async () => {
    const saveData = menuDtl.GDS_ID === undefined ? postData : putData;
    await saveData();
    getData();
    saveModal();
  };

  const deleteMenu = async () => {
    await deleteData();
    getData();
    deleteModal();
  };

  useEffect(() => {
    menuStatus();
    addOption();
  }, []);

  return (
    <>
      <div className={common.popupContainer}>
        <div className={common.popupContent} style={{ width: "300px" }}>
          <div className={common.popupTitle}>
            <h3>메뉴 {menuDtl.GDS_ID !== undefined ? "수정" : "등록"}</h3>
            <button className={common.close} onClick={clickModal}>
              ×
            </button>
          </div>
          <div className={common.menuForm}>
            <div className={common.inptWrap}>
              <label>메뉴 사진</label>
              <div className={common.menuImgReg}>
                <Image src={""} alt={"사진 추가"} />
              </div>
            </div>
            <Input
              id={"menuName"}
              name={"메뉴명"}
              type={"text"}
              defaultValue={menuDtl.GDS_NM}
            />
            <Textarea
              id={"menuDescision"}
              name={"메뉴설명"}
              defaultValue={menuDtl.GDS_DESC}
            />
            <Input
              id={"menuPrice"}
              name={"메뉴가격"}
              type={"number"}
              defaultValue={menuDtl.GDS_PRC}
            />
            <div className={common.inptWrap}>
              {option.map((el, index) => (
                <div key={"op" + index} className={common.optionWrap}>
                  <div className={common.deleteOption}>
                    <label>
                      메뉴 옵션<span className={common.num}>{index + 1}</span>
                    </label>
                    <button onClick={() => deleteOption(index)}>삭제</button>
                  </div>
                  <input
                    type="text"
                    className={common.inpt}
                    placeholder="옵션명"
                    value={el.title}
                    name="title"
                    onChange={(e) => onChange(e, index)}
                  />
                  <input
                    type="number"
                    className={common.inpt}
                    placeholder="옵션 가격"
                    value={el.price}
                    name="price"
                    onChange={(e) => onChange(e, index)}
                  />
                </div>
              ))}
              {/*여기까지*/}
              <button className={common.optnAdd} onClick={() => addOption()}>
                <p>옵션 </p>
                <p>+</p>
              </button>
            </div>
          </div>
          <div className={common.menuSet}>
            <div className={common.setSelect}>
              <div className={common.inptWrap}>
                <label>메뉴 상태</label>
                <select
                  id={"status"}
                  value={status}
                  onChange={() => chageStatusSelect()}
                >
                  <option value="1">판매</option>
                  <option value="2">품절</option>
                  <option value="3">숨김</option>
                </select>
              </div>
              <button className={common.del} onClick={() => deleteMenu()}>
                삭제
              </button>
            </div>
            <button className={common.sav} onClick={clickSave}>
              저장
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
