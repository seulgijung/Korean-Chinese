const lineData = [{
    values: [
        {date: "2017/01/01", total: 821},
        {date: "2018/01/01", total: 871},
        {date: "2019/01/01", total: 925},
        {date: "2020/01/01", total: 3982},
        {date: "2021/01/01", total: 2685},
        {date: "2022/01/01", total: 3488},
    ]
}]

// Convert the year string to a number
lineData[0].values.forEach(item => {
    item.year = parseInt(item.year);
});


export default lineData;

// const lineData = [{
//     values: [
//         {date: "2020/01/01", total: 230},
//         {date: "2020/02/01", total: 290},
//         {date: "2020/03/01", total: 230},
//         {date: "2020/04/01", total: 270},
//         {date: "2020/05/01", total: 244},
//         {date: "2020/06/01", total: 270},
//         {date: "2020/07/01", total: 320},
//         {date: "2020/08/01", total: 320},
//         {date: "2020/09/01", total: 250},
//         {date: "2020/10/01", total: 272},
//     ]
// }]

// export default lineData;