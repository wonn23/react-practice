import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false); // UI 시작할때, 수정상태가 아니므로 입력필드를 띄우지 않겠다는 뜻으로 false이다.

  /*
   * isEditing 초기값은 false이다.
   * button(Edit)을 클릭하면 handleEditClick 함수가 실행된다. setIsEditing 함수도 실행되어 isEditing의 값을 true로 바꾼다.
   * isEditing의 값이 true이면 버튼은 Save로 바뀌고, input 태그가 보여진다. 이때, button(Save)를 클릭하면 isEditing의 값을 false로 바꾼다.
   * isEditing의 값이 false이면 버튼은 Edit으로 바뀌고, span 태그로 바뀐다.
   */
  const handleEditClick = () => {
    setIsEditing((editing) => !editing); // isEditing ? false : true -> !isEditing -> (editing)) => !editing
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
