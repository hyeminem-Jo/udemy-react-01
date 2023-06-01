import React from 'react';
// 리액트 예전 버전에서는 위와 같이 페이지마다 react 를 import 해야했지만 이제 그럴 필요 없어짐
// 기술적으로는 필요없어졌지만 명시적으로, jsx 코드에서 리액트가 내부적으로 사용되고 있음을 알리기 위해 표시해준다.

import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

const Expenses = ({ items }) => {

  return (
    <Card className="expenses">
      <ExpenseItem title={items[0].title} amount={items[0].amount} date={items[0].date} />
      <ExpenseItem title={items[1].title} amount={items[1].amount} date={items[1].date} />
      <ExpenseItem title={items[2].title} amount={items[2].amount} date={items[2].date} />
      <ExpenseItem title={items[3].title} amount={items[3].amount} date={items[3].date} />
    </Card>
  );
};

export default Expenses;