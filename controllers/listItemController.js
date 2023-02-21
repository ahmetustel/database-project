const puppeteer = require('puppeteer');
const Navtex = require('../models/navtex');


const getListItems = async (req, res) => {
    try {

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(
            'https://www.shodb.gov.tr/shodb_esas/index.php/tr/seyir-emniyeti/seyir-duyurulari/tum-istasyonlar'
        );

        const listItems = await page.$$('ul.category-module li');

        for (let i = 0; i < listItems.length; i++) {
            const listItem = listItems[i];
            const listItemContent = await listItem.evaluate((el) => {
                let obj = "";
                const elements = el.querySelectorAll('*');
                for (let j = 0; j < elements.length; j++) {
                    obj += elements[j].innerHTML.trim();
                }
                return obj;
            });

            const newListItem = new Navtex({ navtexContent: listItemContent });
            await newListItem.save();
        }

        await browser.close();

        const allNavtexItems = await Navtex.find().lean();

        res.status(201).json({ status: true, allNavtexItems: allNavtexItems });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

    //   res.render('listItems', { listItems: allListItems });
};

const getListItemss = async (req, res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(
            'https://www.shodb.gov.tr/shodb_esas/index.php/tr/seyir-emniyeti/seyir-duyurulari/tum-istasyonlar'
        );

        const listItems = await page.$$('ul.category-module li');

        let repeatedRecord = [];

        for (let i = 0; i < listItems.length; i++) {
            const listItem = listItems[i];
            const listItemContent = await listItem.evaluate((el) => {
                let obj = "";
                const elements = el.querySelectorAll('*');
                for (let j = 0; j < elements.length; j++) {
                    obj += elements[j].innerHTML;
                }
                return obj;
            });

            const existingItem = await Navtex.findOne({ navtexContent: listItemContent });
            if (!existingItem) {
                console.log( i ,"  --->  ",listItemContent);
                const newListItem = new Navtex({ navtexContent: listItemContent });
                await newListItem.save();
            }
        }

        await browser.close();
        const allNavtexItems = await Navtex.find().lean();

        res.status(201).json({ status: true, allNavtexItems: allNavtexItems });
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
};


module.exports = {
    getListItems,
    getListItemss
}
