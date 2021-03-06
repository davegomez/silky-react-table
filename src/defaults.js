export default {
  /**
   * header {Boolean} [false] Takes the first data row and uses it as the header
   * of the table inside <thead> tags.
   */
  header: false,
  /**
   * rowHeader {Boolean} [false] Takes the first data cell in every row and use
   * it as a header for that row using <th> tags.
   */
  rowHeader: false,
  /**
   * footer {Boolean} [false] Takes the last data row and uses it as the footer
   * of the table inside <tfoot> tags.
   */
  footer: false,
  /**
   * sorted {Boolean} [false] Sorts ascending (low to high) the data based on
   * the first column even if the rowHeader option is set to true
   */
  sorted: false,
  /**
   * sortDescending {Boolean} [false] Sorts the data in descending (high to low)
   * form. As the default ascending sort this ignores the header of the table if
   * the header option is set to true.
   */
  sortDescending: false,
  /**
   * sortByColumn {Number} [null] Index based number refering the column to be
   * used to sort the data, with or without a custom sorting function.
   */
  sortByColumn: null,
  /**
   * columnOptions {[Object]} [null] Array of objects containing the options for
   * each column in the table (the objects may be empty). The number of objects
   * in the array must be equal to the number of columns in the table.
   *
   * The available options are:
   *
   * $0.headerLabel {String} [null] Label to use as the column header in this
   * particular position. This will override the current header label if the
   * header option is set to true.
   *
   * $0.sortAscFunction {Function} [null] Custom compare function in the form
   * (a, b) => a - b for data that requires special treatment in to be sorted.
   *
   * $0.sortDescFunction {Function} [null] Custom compare function in the form
   * (a, b) => b - a for data that requires special treatment in to be sorted.
   *
   * $0.transformer {Function} [null] Function in the form a => a to be call on
   * each table cell content for its corresponding column before render.
   *
   * $0.width {String} [null] Percentage of the total 100% table width to be
   * used by each particular column
   */
  columnOptions: null,
}
