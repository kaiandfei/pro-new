/*
* 表格参数
*/
function generateColumnConfig(_config) {
    const column = [];
    for (const key in _config) {
        let obj = {};
        obj['id'] = key;
        obj['show'] = true;
        const columnAttr = _config[key];
        for (const keyOfAttr in columnAttr) {
            obj[keyOfAttr] = columnAttr[keyOfAttr]
        }
        column.push(obj)
    }
    console.log(column);
    return column
}
// function getTableData(currentPage, pageSize) {
//     this.tableShow = this.setCurrentPageData({
//         currentPage,
//         pageSize,
//         dataShow: this.tableShow,
//         allData: this.queryTableData
//     })
// }调用样例
/*
* 表格分页
*/
function setCurrentPageData(params) {
    let begin = (params.currentPage - 1) * params.pageSize;
    let end = params.currentPage * params.pageSize;
    return params.dataShow = params.allData.slice(begin, end)
}
