 import{test} from "@playwright/test";
// test("upload",async({page})=>{
//     await page.goto("https://www.file.io/");
//     await page.setInputFiles("[for=select-files-input]",["./myntra page.png","C:/Users/Admin/Downloads/KOMALAM R_SHRI260530CR125703779.pdf","C:/Users/Admin/Downloads/VAIKU E 1966.pdf"]);
//     //note : getting path of the file change the\ after/ to upload the file
//     await page.waitForTimeout(5000);
// });

test('download', async ({ page }) => {
    await page.goto('https://demoqa.com/upload-download');
    const [dwnld] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click(),
      page.waitForTimeout(5000) 
    ])
     await dwnld.saveAs('C:/Users/Admin/OneDrive/Pictures/picture1.png');
 await page.waitForTimeout(5000) 
});