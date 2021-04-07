interface Photo {
    url: string;
    altText: string
}

interface Product {
    id: string;
    photoUrl: Photo[];
    title: string;
    description: string;
    price: string;
}

const products: Product[] = [
    {
        id: "8861369",
        photoUrl: [
            {
                url: "https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/5Combo5ChickenChopReadytoCook28b42f.jpg&h=1000&fit=cover",
                altText: "this is a chicken"
            }
        ],
        title: "5包装鸡扒 Combo 5 Chicken Chop - Ready to Cook",
        description: `
好易煮 —— 鸡扒来咯！ 

“好易煮”系列是农家平常在家所吃的菜式，省略了现代家庭烹煮过程中繁琐的食材选择、清理、调味腌制的步骤，做到轻松「剪开即煮，快速可上桌」的特点。

我们将腌制好的食材以真空包装来处理，「一包一次」的分量，方便妈妈们收藏、烹煮和品尝。`,
        price: "RM59.90",
    }, {
        id: "8861370",
        photoUrl: [
            {
                url: "https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/V21Pumpkinslice800gfb20c2.jpg&amp;h=1000&amp;fit=cover",
                altText: "this is a pumpkin slice"
            }
        ],
        title: "V21  南瓜块 Pumpkin slice (800g+-)",
        description: `
南瓜块 Pumpkin slice

• 1块：大概800g+-
• 1 Slice ：800g+-

`,
        price: "RM3.90",
    }, {
        id: "8861371",
        photoUrl: [
            {
                url: "https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/V16LimaBeans220ged9a6c.jpg&amp;h=1000&amp;fit=cover",
                altText: "this is a Lima Beans"
            }
        ],
        title: "V16  棉豆 Lima Beans (220g+-)",
        description: "",
        price: "RM1.90",
    }, {
        id: "8861372",
        photoUrl: [
            {
                url: "https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/V1FrenchBeanse929df.jpg&amp;h=1000&amp;fit=cover",
                altText: "this is a French Beans"
            }
        ],
        title: "V1   富贵豆 French Beans (250g+-)",
        description: `Bukit Tinggi famous 

富贵豆 French Beans
        
• 1Pack (250g+-) `,
        price: "RM3.90",
    }, {
        id: "8861373",
        photoUrl: [
            {
                url: "https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/Sinceromultifunction6LpressurecookerSPC9001baee74.jpg&w=500&h=500&fit=cover",
                altText: "this is a cooker"
            }
        ],
        title: "Sincero multifunction 6L pressure cooker SPC-9001 多功能的智能电压力锅",
        description: `来自Sincero 的Pressure Cooker 多功能的智能气压锅 ，安全耐用，操作方便，一锅多用又省时！是现代家庭最理想的炊具。它可以用来蒸、煮、炖、焖，烘的功能 。

您可以根据不同的菜肴来监控和调整整个烹饪时间。方便又安全! 
 
一锅多用, 省时又安全：
-  具有快速烹饪，节能省时省电
- 不会泄露水蒸气
-  可煲汤、炒菜、焖肉、炖品、烘培等等
- 翻热菜肴/菜肴保温也行 
- 自行监控和调整烹饪时间

✸ TOP Selling No.5

“好易煮”系列是农家平常在家所吃的菜式，省略了现代家庭烹煮过程中繁琐的食材选择、清理、调味腌制的步骤，做到轻松「剪开即煮，快速可上桌」的特点。我们将腌制好的食材以真空包装来处理，「一包一次」的分量，方便妈妈们收藏、烹煮和品尝。

好易煮系列：
⭐️ 共有20道佳肴可任选
⭐️ 原材料制作，新鲜保存
⭐️ 冷冻真空包装, 容易收藏
⭐️ 存放期限为 3个月
        
        
Pressure Cooker from Sincero, which is safe and durable, so it is convenient to operate so that one pot is fully used and saves time! It is the most ideal cooker for modern families. It can be used for steaming, boiling, braising, braising and baking.
        
You can monitor and adjust the entire cooking time according to different dishes. Convenient and safe!
        
A multi-purpose pot saves time and is safe:
        
- With fast cooking, time-saving and electricity saving
- Soups, stir-fries, braised meat, stews, baking, etc
- Turn up the heat/keep the dishes warm
- Monitor and adjust cooking time by yourself
        
短片介绍 Video Introduction ：
https://www.youtube.com/watch?v=k-iIAjAPWOg
        
        
"Ready to Cook" series is a kind of dishes that farmers usually eat at home. It omits the tedious steps of food selection, cleaning, seasoning and curing in the modern family cooking process! We achieve the characteristics of "Just open one pack and Ready to cook". The marinated ingredients are vacuum-packed in "one-a-time" portions for mothers easy to keep in fridge, cook and taste.
        
Easy to Cook Series:
⭐ ️ 20 dishes optional
⭐ ️ fresh preservation
⭐ ️ frozen vacuum packaging, easy to keep
⭐ ️ storage period for 3 months`,
        price: "RM469.90",
    }

]

export default products
