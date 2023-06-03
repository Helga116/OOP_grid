const dataExample = [
    {
        company: `Company 1 <b>Example</b>`,
        chef: "Chef 1",
        country: "Country 1"
    },
    {
        company: "Company 2",
        chef: "Chef 2",
        country: "Country 2"
    },
    {
        company: "Company 3",
        chef: "Chef 3",
        country: "Country 3"
    },
    {
        company: "Company 4",
        chef: "Chef 4",
        country: "Country 4"
    },
    {
        company: "Company 5",
        chef: "Chef 5",
        country: "Country 5"
    }
]

let gridView = new GridView();

const data = {
    header: "Hello",
    headerClass: ['header', 'site-header'],
    attribute: {
        company: {
            label: "Company",
            src: "html"
        },
        chef: {
            label: 'Director'
        },
        country: {
            label: 'Country',
            value: (data) => {
                return data['country'] + 'map'
            }
        }
    },
    data: dataExample,
};

gridView.render(data);
console.log(data)