// description with app JSDoc lenguage
class GridView {
    /**
     * properties
     * @param [array] _tableClasses - css-classes
     * @param [array] data - input data
     * @param [array] attribute - what to show in the table from the data
     * @param [array] _element - where to add in the table
     * @param [array] _header
     * @param [array] _headerClasses
     */
    constructor() {
        this._header = "";
        this._headerClass = [];
        // this._tableClass = [];
        this._element = 'body';
        this.attribute = {};
    }
    /**
     * Method setHeader
     */
    setHeader(header) {
        if (typeof header === 'string' && header.trim() !== "") {
            this._header = header.trim()
            return true;
        }
        return false;
    }
    setHeaderClass(headerClass) {
        if (typeof headerClass === 'object') {
            this._headerClass = headerClass
            return true;
        }
        return false;
    }
    setElement(element) {
        if(document.querySelector(element)) {
            this._element = element;
            return true;
        }
        return false;
    }
    /**
     * Method for show GridView
     */
    render(data) {
        this.setHeaderClass(data.headerClass);
        this.attribute = data.attribute;
        this.setHeader(data.header);
        this.data = data.data;

        // show header
        if(this._header) {
            const header = document.createElement('h1');
            header.textContent = this._header;
            this._headerClass.forEach(cssClass => {
                header.classList.add(cssClass);
            });
            document.querySelector(this._element).append(header);
        }
        // show table
        const body = document.querySelector(this._element);
        const table = document.createElement('table');
        // this._tableClass.forEach(cssClass => {
        //     table.classList.add(cssClass);
        // });
        // create table header
        let trHeader = document.createElement('tr');
        for (let key in this.attribute) {
            let th = document.createElement('th');
            if(this.attribute[key].label) {
                th.textContent = this.attribute[key].label;
            }
            else {
                th.textContent = key;
            }
            trHeader.append(th);
        }
        table.append(trHeader);
        body.append(table)

        // draw table
        let trBody = document.createElement('tbody');
        for (let i = 0; i < this.data.length; i++) {
            let dataArr = this.data[i]; // row of data
            let tr = document. createElement('tr');
            for (let key in this.attribute) {
                let td = document.createElement('td');
                td.textContent = dataArr[key];
                // есть ли функция в value
                if (this.attribute[key].value) {
                    td.textContent = this.attribute[key].value(dataArr);
                }
                tr.append(td)
            }
            trBody.append(tr);
        }
        table.append(trBody)
    }
}


