import XLSX from 'xlsx';

/**
 * 
 * @param headers 表格列集合
 * @param data 表格数据源集合
 * @param fileName 文件名
 */
function exportExcel(headers: any[], data: any[], fileName = '导出.xlsx') {

  const header = headers
    .map((item, i) =>
      Object.assign(
        {}, {
        key: item.key,

        title: item.title,
        position: i <= 25 ? String.fromCharCode(65 + i) + 1 : String.fromCharCode(65 + parseInt((i / 25).toString(), 10) - 1) + String.fromCharCode(65 + (i % 25)) + 1
      },
        console.log(i <= 25 ? String.fromCharCode(65 + i) + 1 : String.fromCharCode(65 + parseInt((i / 25).toString(), 10) - 1) + String.fromCharCode(65 + (i % 25)) + 1)
      )
    ).reduce((prev, next) =>
      Object.assign(
        {},
        prev, {
        [next.position]: { key: next.key, v: next.title }
      }
      ), {}
    );


  const fileData = data
    .map((item, i) => headers.map((key, j) =>
      Object.assign(
        {}, {
        content: item[key.key],
        position:
          j <= 25 ?
            String.fromCharCode(65 + j) + (i + 2)
            :
            String.fromCharCode(65 + parseInt((j / 25).toString(), 10) - 1) + String.fromCharCode(65 + (j % 25)) + (i + 2)
      })))
    // 对刚才的结果进行降维处理（二维数组变成一维数组）
    .reduce((prev, next) => prev.concat(next))
    // 转换成 worksheet 需要的结构
    .reduce((prev, next) => Object.assign({}, prev, { [next.position]: { v: next.content ? next.content : "" } }), {});


  // 合并 headers 和 data
  const output = Object.assign({}, header, fileData);
  // 获取所有单元格的位置
  const outputPos = Object.keys(output);
  // 计算出范围 ,["A1",..., "H2"]
  const ref = `${outputPos[0]}:${outputPos[outputPos.length - 1]}`;

  // 构建 workbook 对象
  const wb = {
    SheetNames: ['mySheet'],
    Sheets: {
      mySheet: Object.assign(
        {},
        output,
        {
          '!ref': ref,
          '!cols': [{ wpx: 45 }, { wpx: 100 }, { wpx: 200 }, { wpx: 80 }, { wpx: 150 }, { wpx: 100 }, { wpx: 300 }, { wpx: 300 }],
        },
      ),
    },
  };

  // 导出 Excel
  XLSX.writeFile(wb, fileName);

}

export { exportExcel };