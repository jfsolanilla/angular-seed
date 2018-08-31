/* user model*/

export class Category {
  private _id: string;
  private _data: [string];
  private _page: number;
  private _paging: {};
  private _per_page: number;
  private _total: number;

  constructor(categoryDTO: any) {
    this._id = categoryDTO.id;
    this._data = categoryDTO.data;
    this._page = categoryDTO.page;
    this._paging = categoryDTO.paging;
    this._per_page = categoryDTO.perPage;
    this._total = categoryDTO.total;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get data(): [string] {
    return this._data;
  }

  set data(value: [string]) {
    this._data = value;
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }

  get paging(): {} {
    return this._paging;
  }

  set paging(value: {}) {
    this._paging = value;
  }

  get perPage(): number {
    return this._per_page;
  }

  set perPage(value: number) {
    this._per_page = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

}
