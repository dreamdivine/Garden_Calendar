const cropsName = ["artichoke", "arugula", "asparagus", "basil", "beans", "beets", "bokchoy", "broccoli", "brussel", "cabbage", "carrots", "cauliflower", "celery", "chard", "cilantro", "corn", "cucumber", "eggplant", "fava", "garlic", "kale", "leek", "lettuce", "melon", "mustard", "okra", "onion", "parsley", "peas", "pepper", "potato", "pumpkin", "radish", "spinach", "squash", "watermelon", "tomato", "turnip", "zucchini"]


plantData = {
    "artichoke": `
      <h2>PREPARING THE GARDEN</h2>
      <p>The artichoke is a perennial, so prepare the soil well before planting.
       Mix manure, compost, or other organic matter into the first foot of soil
       in about equal volumes.</p>
       <p>Artichokes don't reproduce true from seed, so they're best planted by using root divisions available at nurseries. Or a healthy plant can be dug up, the root divided into two or more parts and replanted. Artichoke plants reach a height of 3 or 4 feet and a spread of up to 6 feet in diameter, so allow plenty of space for them to grow. In the vegetable garden, plant them to the side so that they won't be disturbed by the more frequent planting of annual vegetables. They should be spaded at intervals of 4 to 6 feet along the row with 6 to 8 feet between the rows. In the ornamental garden, don't plant them near tree roots, as they don't compete well for nutrients and water.</br> The root sections should be set 6 to 8 inches deep in the soil.<br/><br/> Irrigate thoroughly before planting.</p>
      <span class="close">X</span>`,
    "arugula": `<h2>Growing Guide</h2>
    <p>Prefers rich humusy soil with pH of 6 to 6.8, but will tolerate wide variety of conditions. Evenly moist soil will help slow bolting.
    <p>Growth is low and compact until heat causes plant to bolt.</p> 
    <p>Forms a rosette of deeply lobed leaves. Plants become erect when heat induces bolting.</p>
     <h2> MAINTAINING </h2> 
     <p>Seeds germinate quickly even in cold soil. Plant as soon as soil can be worked in spring.</p>
     <p>Avoid planting after other cabbage family crops.</p>
     <p>Plant ¼ inch deep and 1 inch apart in rows, or broadcast alone or mixed with other greens. Gradually thin to 6-inch spacings using thinnings for salads.<br/> Make new plantings every 2 to 3 weeks for a continuous supply until about a month before your average first frost date.</p>
    <span class="close">X</span>`,
    "asparagus": `<p>Asparagus is a hardy perennial suited to USDA zones 2 to 8 and is native to western Europe. </p> 
    <p>This perennial can remain viable for 10 to 20 years, so choose your garden site carefully. 
    Asparagus needs a soil pH of between 7.0 and 7.2 in fertile, well-draining soil. </p> 
    <p> It’s recommended that you start asparagus seeds indoors or in a greenhouse in mid-February to May under bright lighting. Soil temperatures for seed germination should be between 70 and 85 degrees F. (21-29 C.). Soak the seeds for a couple of hours, then plant each seed ½ inch (1 cm.) deep in sterile soil, in individual 2 inch (5 cm.) pots. They should sprout anywhere between two and eight weeks from planting asparagus seeds.</p>
    <span class= "close">X</span>`,
    "basil": `Growing Guide <br/><br/> Needs 6 at least 6 hours of sun per day. <br/> Prefers steady moisture and warm soil. </p>
   
    <h2> Maintaining </h2>
     <p>Plant basil in fertile soil in a spot that gets direct sun for at least 6 hours per day.</p>
    
     <p>Pinch the tip from the center shoot of basil after it has grown for 6 weeks to force side growth and prevent early flowering. If flower stalks develop, simply snip them off.</p>
     <p>Basil needs a steady supply of moisture and warm soil temperatures to produce well, so you have to play a balancing act with mulch. In cool areas, delay mulching until the soil temperature has reached the mid-60s.</p> 
     <p>Where summer really heats up and soil loses moisture quickly, you can add mulch sooner.</p> 
  
     <p>Basil has few pests, but occasionally generalist pests such as aphids, flea beetles, and Japanese beetles will feast upon it. Rinse off aphids with a garden hose. To prevent beetles from munching, cover the crop with fabric row cover. If slugs are a problem on new transplants, try a barrier of copper flashing.</p>
     <span class= "close">X</span>`,
    "beans": `<h2>Growing Guide</h2>
    
    <p>Beans generally do not respond well to transplanting, and are usually direct sown around or just after the last spring frost.</p>
    <p>The most important point about growing beans is not to plant them too early. They will rot in cool, damp soil. Even so, many beans require a long growing season of 80 days or more. To get an earlier start, you can put down black plastic, to warm the soil.</p> 
    
    <p>Most beans should be sown with the eye of the been facing downward, 1-2 inches deep, approximately 4 - 6 inches apart, with 24 inches or more between rows.The ideal site will be sunny, well - drained, moderately fertile, and slightly acidic(pH 6.0 - 7.0).</p>
     
     <h2> MAINTAINING BEANS </h2> 
     
     <p> When watering, try to avoid getting the leaves wet as this can promote fungus or other damaging conditions that beans can be susceptible to. Most types of beans are somewhat drought resistant, but check the surface of the soil frequently and water when the top layer has become dried out.</p>
     
      <p> Once established, beans generally will not require fertilizing and will generate their own nitrogen. However, if the leaves of young plants are pale this is an indication of nitrogen deficiency and starts can be fertilized with with fish emulsion or other natural nitrogen rich fertilizer.</p>
      <span class="close">X</span>`,
    "beets": `<h2>Growing Guide </h2> 
    
    <p>Prefers well-drained sandy loam to silt loam soil, high in organic matter, with pH between 6.5 and 7 and free of large stones. Good soil structure is important because growth is improved by good soil aeration. </p>
    <p>Beets grow poorly in acid soil. They tolerate low fertility but require consistent moisture. Do not plant in soils with pH less than 6.0.</p>
    
    <h2>MAINTAINING</h2>
     
     <p>Plant in early spring, as soon as you can work the soil, ¾ inch deep and 1 inch apart in rows 12 to 18 inches apart. For continuous harvest, make successive plantings every three weeks until midsummer. For winter storage, sow crop about 10 weeks before heavy freeze.</p> 
   
     <p>The wrinkled “seedball” usually contains two to four viable seeds, making it necessary to thin to 3- to 4-inch spacings if you plan to harvest young, small or cylindrical-shaped roots, or 6-inch spacings for larger roots for winter storage.</p>
     
     <p>Begin thinning when seedlings are about 4 to 5 inches tall, and eat the thinnings. Cut rather than pull plants when thinning to avoid disturbing roots of other plants.</p>
     <span class="close">X</span>`,
     "bokchoy": `<h2>Growing Guide </h2>
   
    <p>Prefers well-drained, fertile soil high in organic matter, pH 6.0 to 7.5. Can tolerate slightly alkaline soil. Needs plentiful, consistent moisture.</p> 
    
    <h2>MAINTAINING</h2>
    
    <p>While not as sensitive to heat and cold as Chinese cabbage, spring crops may bolt prematurely if young plants are exposed to frost or a week of nighttime temperatures below 50 F. Wait until after last frost date to direct seed or transplant out.</p> 
    
    <p>Start transplants inside 4 to 6 weeks before last frost date. Transplant 6 to 12 inches apart in rows 18 to 30 inches apart. Use the closer spacings for smaller varieties.</p> 
   
    <p>Plant direct-seeded spring crops ¼ to ½ inch deep and about 1 inch apart in rows 18 to 30 inches apart. Thin to 6- to 12-inch spacings. Use thinnings in salads</p>
  
     <p>For fall crops, direct seed ¼ to ½ inch deep in rows 18 to 30 inches apart in summer. Thin to 6- to 12- inch spacings. Or set transplants out at 6- to 12-inch spacings 4 to 6 weeks before first frost.</p>
     <span class="close">X</span>`,
    "broccoli":`<h2>"Growing Guide</h2>
    
     <p>Can tolerate light shade but will slow maturity.
      Prefers well-drained, fertile soil high in organic matter, pH 6.0 to 7.5. Can tolerate slightly alkaline soil. Needs plentiful, consistent moisture.
        Broccoli prefers cool temperatures. In many regions it can be grown as both a spring and fall crop.</p>
          <p>PLANTING INSTRUCTIONS</p>
           <p>Select a site with full sun and well-drained soil. Prepare the garden bed by using a garden fork or tiller to loosen the soil to a depth of 12 to 15 inches, then mix in a 2 to 4-inch layer of compost. </p>
        
            <p> Start spring transplants indoors five to seven weeks before the last spring frost date, or buy nursery transplants three weeks before the last spring frost date. Set out transplants three to four weeks before the last spring frost. Protect transplants from hard frosts with newspapers, plastic cones, paper bags, or baskets. Provide a windbreak to reduce transplant shock and moisture loss. For fall crops, direct seed the broccoli in the garden 85 to 100 days before the average first fall frost date.</p> 
              <p>Prefers well-drained, fertile soil high in organic matter, pH 6.0 to 7.5. Can tolerate slightly alkaline soil. Needs plentiful, consistent moisture. 
               Use low nitrogen fertilizer at planting. Too much nitrogen fertilizer may cause hollow stems.</p>
                <span class="close">X</span>`,
    "brussel": `<h2>Growing Guide </h2>

                 <p>Prefers well-drained, fertile soil high in organic matter, pH 6.0 to 7.5. Can tolerate slightly alkaline soil. Needs plentiful, consistent moisture.</p> 
                 <p>MAINTAINING <br/>Grow in summer for fall harvest, similar to a fall cabbage or broccoli crop.</p>
              
                 <p>Direct seed about 4 months before expected fall frost. Plant seed 3 to 4 inches apart, ¼ to ½ inch deep in rows about 30 inches apart. Thin plants to about 18 inches apart. Start transplants in late May and transplant in late June or early July. Space plants 18 to 24 inches apart.</p>
                 <span class="close">X</span>`,
    "cabbage": `<h2>Growing Guide </h2>
              
                <p>Can tolerate light shade but will slow maturity. Light shade can be beneficial in warm weather. Prefers well-drained, fertile soil high in organic matter, pH 6.0 to 7.5. Can tolerate slightly alkaline soil. This heavy feeder also needs plentiful, consistent moisture.</p>
                
                 <h2>MAINTAINING </h2>
               
                 <p>Sow seeds indoors 6 to 8 weeks before average last spring frost.Keep soil warm(about 75 F) until germination.Then keep plants around 60 F. Provide direct sun so plants don’t get leggy. When plants are 4 to 6 weeks old, transplants into garden 12 to 24 inches apart, in rows 18 to 34 inches apart. Use closer spacings for smaller, early varieties, wider spacings for larger, late- season varieties.</p>
                 <p>Direct seed in summer for fall crop, or start transplants in late May and transplant in late June or early July. When cabbages are 4 to 5 inches tall, thin or transplant to stand 18 to 24 inches apart. Apply a thick layer of mulch to retain moisture. Water plants during the summer if rainfall is less than 1 inch per week.</p>
                 <span class="close">X</span>`,
    "carrot": `<h2>Growing Guide </h2>
        
               <p>Good quality roots require plentiful moisture and soil that is deep, loose, free of stones, and high in organic matter. Roots can become twisted and forked in heavy, stony soil. Prefers pH of 6.0 to 6.8 but can tolerate 5.5 to 7.5. Requires only moderate nitrogen. Too much can cause root branching.</p>
               
           
                <h2>MAINTAINING</h2>
                 
                 <p> Plant in spring, 2 to 3 weeks before last frost, ½ inch deep, ½ inch apart, in rows 12 to 24 inches apart. Deeply worked soil with fine, weed-free seedbed will greatly improve chances of successful crop. </p>
                
                 <p>Carrots are slow to germinate (1 to 3 weeks), and often germinate unevenly over a period of several weeks. To speed germination, water lightly daily if soil is dry. </p>
                 
                 <p>Thinning is critical to reduce competition from neighboring plants. Thin to 1- to 4-inch spacings (depending on size of root desired) before plants are 2 inches tall. Cutting rather than pulling reduces disturbance of the remaining plants. Use seed tape or pelleted seed for more even spacings and less thinning. Or mix seed in roughly equal proportions with sand, fine vermiculite, or dried coffee grounds. Mulch to keep soil cool, conserve moisture and to keep exposed shoulders from turning green and bitter.</p>
                 <span class="close">X</span>`,
    "cauliflower": `<h2> PLANTING INSTRUCTIONS</h2>
                    <p> Select a site with full sun and well-drained soil. Prepare the garden bed by using a garden fork or tiller to loosen the soil to a depth of 12 to 15 inches, then mix in a 2 to 4-inch layer of compost. Start spring transplants indoors five to seven weeks before the last spring frost date, or buy nursery transplants three weeks before the last spring frost date. Where the weather is warm, select a variety that is bolt resistant. Set out transplants three to four weeks before the last spring frost. Space plants 18 inches apart. Protect transplants from hard frosts with newspapers, plastic cones, paper bags, or baskets. Provide a windbreak to reduce transplant shock and moisture loss.</p>
                    <p> For fall crops, direct seed the broccoli in the garden 85 to 100 days before the average first fall frost date.</p>
                    
                       <h2> MAINTAINING</h2>
                       
                       <p>Sow seeds indoors 6 to 8 weeks before average last spring frost. Keep soil warm (about 75 F), until germination. Then keep plants around 60 F. Provide direct sun so plants don’t get leggy. When plants are 4 to 6 weeks old, transplant into garden 12 to 20 inches apart.</p>
                        
                        <p> Direct seed in midsummer for fall crop, or start transplants in late May and transplant in late June or early July. Use low nitrogen fertilizer at planting. Too much nitrogen fertilizer may cause hollow stems.</p>
                        <span class="close">X</span>`,
    "celery": `Growing Guide 
  
     <p> Prefers rich soil, high in organic matter with pH 6.0 to 7.0 and consistent, plentiful supply of moisture. Can tolerate soils that are less than well-drained because it was originally a wetland plant. Seeds need to be started inside and are difficult to germinate. Cold weather after transplanting can cause bolting. Needs plentiful moisture and long season, but doesn't tolerate heat well.</p>
    
      <h2> MAINTAINING</h2>
      
       <p> Start plants inside about 10 to 12 weeks before last frost. Plant several seeds per cell. Seeds need light to germinate, so don't cover seed deeply. Keep soil moist and warm (about 70 F to 75 F) until seeds germinate in 2 to 3 weeks. After germination, grow inside in a cool location (about 60 F to 70 F). Thin to one seed per cell. Plants will withstand light frost, but 10 days with night temperatures below 40 and days below 55 F can cause bolting.So harden plants by reducing water, not lowering temperature. Set out transplants 6 to 12 inches apart, rows 18 to 36 inches apart, about 2 weeks before average last frost.</p>
       <span class="close">X</span>`,
    "chard": `Growing Guide 
    
     <p> Prefers full sun early in the season, part shade in summer when it’s warm. Prefers full sun early in the season, part shade in summer when it’s warm. 
    
      <h2> MAINTAINING </h2>
     
      <p> Start planting about 2 to 3 weeks before last expected frost. Sow seeds ½ to 1 inch deep, 2 to 6 inches apart, in rows 18 to 24 apart. Like beets, chard “seeds” produce more than one plant, and so will require thinning. Thin to 6- to 12-inch spacings. If you plan to harvest whole plants, make succession plantings through late summer. Delay planting of ‘Ruby Red’ or ‘Rhubarb’ chard until after last frost. These varieties may go to seed(bolt) if seed is exposed to freezing temperatures. Start seed inside for earlier crops, or if you want to arrange different colored plants of the variety ‘Bright Lights.’ Mulch plants to retain moisture and suppress weeds. You can begin harvesting when leaves reach usable size. Remove a leaf or two from each plant, or cut plants an inch or two above the soil for cut - and - come - again harvest. Avoid damaging the growing point in the center of the plant at harvest.</p> 
      <span class="close">X</span>`,
    "cilantro": `<h2>Growing Guide</h2> 
    
     <p> Plant coriander in full sun; it will tolerate light shade. Coriander grows best in well - drained but moisture- retentive soil rich in organic matter. Prepare planting beds in advance with aged compost. Coriander prefers a soil pH of 6.0 to 6.7. Sow coriander seed ¼ to ½ inch deep; thin successful seedlings from 8 to 12 inches apart. Space rows 12 to 15 inches apart.</p>
     
     <h2>MAINTAINING</h2>
      
      <p> Keep coriander evenly moist throughout the growing season. Do not let plants dry out. Avoid overhead watering as plants reach maturity; overhead water or rain can reduce seed yield. Add aged compost to the planting bed in advance of planting. Do not fertilize at midseason.</p>
      <span class="close">X</span>`,
    "corn": `<h2>Growing Guide</h2> 
     
     <p> Needs deep, well - drained, fertile soil, pH 6.0 to 6.8 and consistent, plentiful moisture. Tender annual Requires excellent soil and consistent moisture. Otherwise, it's not difficult to grow. </p>
     
     <h2> MAINTAINING </h2>
    
     <p> Corn requires rich, fertile soil. Add compost or well rotted manure in fall. Make first planting after last frost date. Soil should be at least 65 F for fast germination. To speed increase in soil temperature, consider covering soil with black plastic for several weeks before planting. Thin to 8 - to 12 - inch spacings when plants are 3 to 4 inches tall. Increase seeding rates to ensure a good stand if soils are cold or you are using seed that has not been treated with fungicide. Untreated seed has natural color. Treated seed is dyed. Two weeks later, plant another block of an early hybrid, plus blocks of mid - and late - season hybrids. Continue making plantings until late June or early July, depending on the length of your growing season.</p>
       <p>Corn is a heavy feeder - particularly of nitrogen - and may require several sidedressings of fertilizer for best yields.Look for signs of nutrient deficiency.Purple - tinged leaves are a sign of phosphorus deficiency.Pale green leaves are a sign of nitrogen deficiency. For miniature or baby corn, plant seeds 2 to 4 inches apart and harvest as silks emerge from the ear, or harvest secondary ears from normally spaced plantings, allowing the main ear to fully mature. Also try hybrids specifically bred for early baby corn harvest.</p>
     <span class="close">X</span>`,
    "cucumber": `<h2>Growing Guide</h2> 
   
     <p>Well - drained, fertile soil, high in organic matter with near - neutral pH.Consistent, plentiful moisture needed until fruit is ripening.May develop bitter taste in dry sites.Cucumbers are heavy nitrogen feeders and require fertile soil. Cucumbers are not hard to grow if you provide good soil, plenty of moisture and full sun, wait for soil and weather to warm before planting, and use fabric row covers if pests are a problem. Vining varieties can climb up to 6 feet with support, or hug the ground if allowed to sprawl. Bush varieties take up only 2 or 3 square feet, while unsupported vining varieties can run along the ground for 6 or more feet.</p>
      
       <h2> MAINTAINING </h2>
       
        <p> Cucumbers are very sensitive to cold.
        They need warm soil and air, whether direct- seeded or transplanted.
         Don’t rush to plant too early. Seed will not germinate if soil temperature is below 50 F, and germinates only slowly at 68 F. Be careful not to damage roots when transplanting.
          For a continuous harvest, make successive plantings every 2 to 3 weeks until about 3 months before first fall frost date. 
           To save space, train vining cucumbers to a trellis. This also increases air circulation(reducing disease problems), makes harvest easier and produces straighter fruit. Set up trellis before planting or transplanting to avoid root injury. Pinch back vines that extend beyond the trellis to encourage lateral growth. Cucumbers are heavy feeders and require fertile soil, nitrogen fertilizer, and / or additions of high - N organic matter sources. Pale, yellowish leaves indicate nitrogen deficiency. Leaf bronzing is a sign of potassium deficiency.</p>
        <span class="close">X</span>`,

    "eggplant": `<h2>Growing Guide</h2> 
     <p>Prefers fertile, well- drained, slightly acid soil that is high in organic matter for best growth and yield, but tolerates a broader range of soil types.Has moderate moisture needs. Requires fertile soil and a long, warm growing season.</p>
      <h2>MAINTAINING</h2> 
      <p>Start inside about 6 weeks before last frost date(or about 8 weeks before expected transplanting).Plant 1 / 4 inch deep in flats or cell - type containers.Keep soil warm(about 80 F to 90 F if possible) until emergence.Eggplant will not germinate in cool soil. Harden off plants carefully before transplanting by reducing temperature and water. Wait until weather has settled, all chance of frost has passed and soil is in the 60s F before transplanting. Cool conditions can weaken plants. Frost will kill them. Consider using raised beds or black plastic mulch to warm soil and speed early - season growth.If using organic mulches to help retain moisture, do not apply until the soil has warmed. Set transplants 18 to 24 inches apart in rows 30 to 36 inches apart. Use row covers to protect plants from pests. If season is cool, fruit set may be inconsistent.Plants with heavy fruit set benefit from staking. Eggplants are heavy feeders, but avoid high - nitrogen fertilizers.They may encourage lush foliage growth at the expense of fruit. Pinch off blossoms 2 to 4 weeks before first expected frost so that plants channel energy into ripening existing fruit, not producing new ones. To help reduce disease, do not plant eggplants or other tomato - family crops in the same location more than once every three or four years.</p>
      <span class= "close">X</span>`,
    "fava": `<h2>Growing Guide</h2> 
    
     <p>In mild climates, USDA Zones 6 and up, they are planted in the fall and grown through winter; the plants can handle some frost. In colder zones with snowy winters, they are planted in the spring once the soil has dried out, usually sometime in April. Seeds usually germinate in 7 to 14 days, but germination may be slower in cool soil. You can speed up germination by soaking the seeds in water for an hour, before sowing. Direct sow the seeds about 2 inches deep, spaced 4 to 6 inches apart. Thin the seedlings to 8 to 12 inches, because crowding can encourage diseases. You can also grow them in hills, five to six seeds per hill, with hills spaced 4 feet apart.</p> 
     
      <h2> MAINTAINING </h2>
     
      <p>Fava beans will grow in full sun or part shade. Fava beans are a cool-season vegetable and really prefer full sun when grown in the spring. Fava beans grow best in average soil with a slightly acidic to neutral soil pH in the range of 6.2 to 6.8. </p>
      <p>Fava beans have average water needs—about 1 inch per week in the form of rainfall and/or irrigation. Fava beans grow best at temperatures between 60 to 65 degrees Fahrenheit, and usually do not produce well when temperatures exceed 80 degrees. Fava beans, like other legumes, fix their own nitrogen into the soil and therefore don't usually require additional feeding.</p> 
       <span class= "close">X</span>`,
    "garlic": `<h2>Growing Guide</h2> 
   
     <p>Well- drained, fertile, with plenty of organic matter.Slightly dry sites preferable. Tolerates wide pH range but prefers slightly acid soil 6.2 to 6.8.Perennial grown as an annual. (Fall - planted, harvested the following summer. Easy if you have rich well - drained soil and good weed control.</p>
   
     <h2> MAINTAINING </h2>
    
    <p> Garlic prefers cool weather when developing foliage, and warm weather when bulbs enlarge.Fall plantings take about 8 months to mature. Choose a weed - free, well - drained location.Raised beds are ideal.Do not plant where other onion family crops have been grown in the past 3 years. In New York, plant from about the time of first fall frost to early November. If your soil is loose and well - prepared, you can plant in very early spring, but fall plantings usually yield more. Using cloves from the supermarket is not recommended.They may carry diseases or have been treated to discourage sprouting.Most are also from varieties that are not well - adapted to New York's climate. Purchase bulbs from mail order suppliers, garden center, or other local source. Break bulbs apart at planting time, keeping papery husks on the individual cloves.Plant with tips up, 2 inches deep and 4 to 6 inches apart in rows 15 to 24 inches apart.Plant elephant garlic varieties about 3 inches deep and 8 to 12 inches apart. Mulch heavily after planting to prevent soil heaving - particularly with less - hardy elephant garlic varieties.Roots will begin to grow even though topgrowth may not be evident in late fall and winter.Remove mulch in spring, leaving only what is needed to suppress weeds.</p>
    <p> For larger bulbs, remove woody flower stalks(scapes) as they appear.Bulblets at top of scape can be used in cooking. Plant large cloves to produce the largest bulbs.Plant smaller cloves at closer spacings or in patches for harvest as garlic greens.Save largest bulbs for planting your next crop.</p>
     <span class="close">X</span>`,
    "kale": `<h3>Growing Guide</h3> 
   
     <p>Prefers full sun in spring and fall, but can benefit from light shade during hot weather. Prefers well-drained, fertile soil high in organic matter, pH 6.0 to 7.5.Can tolerate slightly alkaline soil.Prefers plentiful, consistent moisture. </p>
     <p>Can tolerate drought, but quality and flavor of leaves suffer. Biennial grown as an annual. Depends on variety. Depends on variety.Those with savoyed leaves tend toward the fine end of the spectrum.Older plants with smooth leaves can be coarse. As plants mature and lower leaves are harvested, plants begin to look less like a clump and start to resemble small palm trees with a cluster of leaves at the top of a long stem. </p>
     <h3> MAINTAINING </h2>
     <p> Direct seed about three months before expected fall frost.Plant seeds ¼ to ½ inch deep, 1 inch apart in rows 18 to 30 inches apart.Thin to 12 - to 18 - inch spacings.Eat or transplant thinnings. <p> Similar to cabbage and other cole crops, you can also set out transplants in spring 4 to 6 weeks before average last frost, 12 inches apart, rows 18 to 24 inches apart. Doesn't seem to be as troubled by pests as most other cole crops. Use floating row covers to help protect from early insect infestations. To help reduce disease, do not plant kale or other cole crops in the same location more than once every three or four years.</p> 
      <span class= "close">X</span>`,
    "leek": `<h2>Growing Guide</h2> 
   
     <p>Well- drained, rich soil, high in organic matter.Optimum pH is 6.2 to 6.8.Requires plentiful, even moisture for good yields. Biennial grown as an annual. Long - season varieties have a dark, bluish - green color.</p>
     
      <h2> MAINTAINING </h2>
       
       <p> Choose a weed - free, well - drained location.Raised beds are ideal.Leeks are good for intercropping with other garden plants, especially early - maturing spring greens.Do not plant where other onion family crops have been grown in the past 3 years. You can direct - seed leeks, or start transplants indoors.Long - season varieties are best started indoors. Start transplants about 8 to 10 weeks before last frost date.Sow seeds in flats about ¼ inch apart and ½ inch deep.Transplant to cell - type containers when they are about 2 inches tall.If you skip this step and continue growing in open flats, simply tease apart and trim roots when transplanting into the garden. Around the average last day of frost, set hardened - off transplants 4 to 8 inches deep, 4 to 6 inches apart, in rows 20 inches apart.Deep planting reduces need for hilling to blanch the base of the plants.Transplants should be about 6 to 12 inches tall - the bigger, the better.Only a few inches of leaf need to show above the soil. Direct seed about 4 weeks before average last frost ½ inch deep, 1 inch apart, in rows 20 inches apart.Thin to 4 to 6 inches apart. Hill or mound soil around stems several times to blanch as leeks grow. (A single large hilling while plants are young can cause them to rot. Or, place a portion of cardboard paper towel center around the lower part of the stem.</p>
         <span class= "close">X</span>`,
    "lettuce": `<h2>Growing Guide</h2> 
   
     <p>Lettuce grows best in full sun, though excessive heat can cause plants to bolt to seed, or leaves to wilt.For an early start, seeds can be started in flats 4 weeks prior to the last frost and transplanted outdoors in mid to late spring.If growing in summer, select a partially shaded location, or one that receives primarily eastward exposure to mitigate the potentially damaging effects of excessive heat upon lettuce. Lettuce is tolerant of a wide range of soils, but prefers well- drained, cool, loose soil with plentiful moisture and pH 6.2 to 6.8. Sensitive to low pH. Lime to at least 6.0. To encourage tender and tasty growth, make sure location is rich in organic compost matter.Amend prior to planting if needed. </p>
     
     <h2> Sowing </h2>
      
      <p>Direct seed or transplant in early spring, as soon as you can work the soil. To get an early start, prepare beds the previous fall by working in manure or compost and raking smooth to leave a fine seedbed. Seeds need light to germinate; sow at a very shallow depth by covering with a thin layer of growing medium. </p>
       
       <p> Direct-seeding <br/> Sow seed 1/8 inch deep, 1 inch apart in rows 12 to 18 inches apart. When plants have two or three true leaves, thin to 12-inch spacings for crisphead varieties, 6 to 10 inches for other types. You can also lightly broadcast seed (particularly of looseleaf varieties) in a patch instead of a row.</p>
        
        <p> Use row covers to protect very early plantings from cold, to protect young plants from insects, and (supported by hoops) to shade crops when warm weather arrives. Make succession plantings every week or two, and grow several varieties with different maturity dates for a continuous supply.Moisture, stress, and high temperatures, particularly at night, encourage bolting.As the season progresses, plant more bolt- resistant varieties.Locate plants where they will be partially shaded by taller nearby plants, latticework or other screen.</p>
        <span class="close"> X</span>`,

    "melon": `<h2>Growing Guide</h2> 
   
     <p>Prefers warm, well- drained, soil, high in organic matter with pH 6.5 to 7.5.Consistent, plentiful moisture needed until fruit is about the size of a tennis ball.Soil temperatures below 50 F slow growth.Consider using black plastic and fabric row covers to speed soil warming.Sandy or light - textured soils that warm quickly in spring are best.</p>
      
       <h2> MAINTAINING </h2>
       
        <p> If you have long, hot growing seasons direct-seed into garden. To ensure ripening in areas with shorter growing seasons and cooler weather, choose fast-maturing varieties, start plants inside, use black or IRT plastic mulch to warm soil and use fabric row covers to protect plants. Direct- seed 1 to 2 weeks after average last frost when soil is 70 F or warmer.Plant ½ inch deep, 6 seeds per hill, hills 4 to 6 feet apart; or 1 foot apart in rows 5 feet apart.Can plant at closer spacings if trellised.Thin to 2 to 3 plants per hill. For transplanting, sow seeds indoors ¼ inch deep in peat pots(2 - inch square or bigger), 2 to 4 weeks before setting out.Plants should have one or two true leaves when transplanted. Transplant at same spacings as direct - seeded crops - 2 to 3 plants per hill in hills spaced 4 to 6 feet apart, or 1 to 2 feet apart in rows 5 feet apart.Transplants are delicate and roots are sensitive to disturbance.If you need to thin, use scissors.Keep soil intact around plant when transplanting. Mulch plants after soil has warmed to help maintain consistent moisture and suppress weeds. Plants require consistent moisture until pollination. Once fruits are about the size of a tennis ball, only water if soil is dry and leaves show signs of wilting.</p>
         <span class= "close">X</span>`,
    "mustard": `<h2>Growing Guide</h2> 
        
        <p>Benefits from some shading during warm weather.</p>
        
        <p>Prefers well- drained, fertile soil high in organic matter, pH 6.0 to 7.5.Can tolerate slightly alkaline soil.Needs plentiful, consistent moisture. Some varieties have contrasting white or purples stems and veins, or have crinkled or savoyed leaves. <br/><br/> MAINTAINING <br/> From early spring to late summer, sow seeds ¼ to ½ inch deep, 1 inch apart in rows 6 to 8 inches apart.Thin to 6 - inch spacings for smaller varieties, or up to 18 inches for large ones. <br/> Plant every 2 weeks for continuous harvest.Some plantings may bolt quickly in response to increasing temperatures and day length.High temperatures and lack of moisture increase peppery taste. Use floating row covers to help protect from early insect infestations. To help reduce disease, do not plant mustards or other cole crops in the same location more than once every three or four years.</p>
         <span class="close">X</span>`,
    "okra": `<h2>Growing Guide</h2> 
       
        <p>Okra likes fertile, well- composted soil and needs moisture and warmth to thrive.Soak seeds for overnight before directly sowing into warm soil or started indoors three to four weeks prior to your last expected frost.You must be careful not to damage the roots during transplanting. Although okra typically has no problems with disease or pests, it is very sensitive to frost.Okra easily cross - pollinates so if you are planning to save seed, either plant only one variety or separate by up to one mile. </p>
         
         <h2> MAINTAININ </h2>
          
          <p>The key to maintaining okra production continuously throughout the summer is to harvest regularly.Only 3 to 4 days are required from the time the okra flower opens until the pod reaches harvest maturity.For this reason, okra must be harvested at least every other day during the growing season.Failure to remove mature pods from the okra plant will cause reduced yield and quality of pods which set on the plant later.The pods are either cut or broken from the plant and should be refrigerated or used as soon as possible after harvest.</p>
           <span class= "close">X</span>`,
    "onion": `<h2>Growing Guide</h2> 
        
        <p>Well- drained, rich soil, high in organic matter, neutral pH.Optimum pH is 6.2 to 6.8.Requires plentiful, even moisture for good yields. Biennial grown as annual. Easy if you have rich well - drained soil and good weed control. Usually does not flower unless grown from sets that are too large(more than ½ to ¾ inches in diameter), or young plants(direct seeded or transplanted) are stressed by abnormally cold weather.</p>
         
         <h2> MAINTAINING </h2>
          
          <p> Can be direct - seeded, grown from transplants started inside, or from sets-- small bulbs about ½-inch in diameter grown from seed the previous season. Onions are good for intercropping with other garden plants, especially early - maturing spring greens. Direct - seeding in the garden may not allow enough time for long - season varieties to mature, but is fine for shorter - season varieties or for scallions. Direct - seed in spring when the soil reaches 50 F. Start transplants inside about 8 to 10 weeks before last frost date.Plant 4 or 5 seeds in each cell, or seed in flats ¼ inch deep and ½ inch apart.If tops grow too tall and begin to droop, trim back to about 3 inches tall with scissors.After hardening off, transplant 2 to 4 weeks before last frost date.Space 4 inches apart for large bulbs, 2 inches apart for smaller bulbs, or 1 inch apart for scallions. From sets: Choose bulbs no larger than ¾ inch in diameter.</p>
           <span class= "close">X</span>`,
    "parsley": `<h2>Growing Guide </h2> 
    
     <p>Likes full sun or part shade. Prefers rich, moist soil. Slow-sprouting seed.</p>
     
      <h2> MAINTAINING </h2>
       
       <p> Although parsley is a biennial, it’s best to start new plants each year because the leaf flavor is not as good in the second season.To hasten germination of this slow - sprouting seed, pour warm water over seeds and let them stand overnight before planting.Sow seed in individual pots indoors or plant them outside in the garden.Parsley is very hardy: You can direct- sow seeds 2 to 3 weeks before the last spring frost. (If you sow seeds directly in the garden, keep the area as weed - free as possible so the tiny, slow - growing seedlings don’t have to compete with a jungle when they sprout. Plants do well in sun or partial shade, and prefer a rich, moist soil.Thin plants to stand 6 to 10 inches apart, and provide an even supply of water all summer.In some regions, caterpillars such as cabbage looper and black swallowtail larvae may take up residence and nibble on plants.</p>
         <span class= "close">X</span>`,
    "peas": `<h2>Growing Guide</h2> 
    
     <p>Yields best in full sun. Prefers well- drained soil, average fertility, high in organic matter with pH 6.0 to 7.0.Widely adapted, but prefers cool, damp weather. Good soil structure is important.Avoid compacting soil by working it when it’s still too wet. </p>
     <h2> MAINTAINING </h2>
     
      <p> Sow seed in spring as soon as you can work the soil - as early as late March or early April depending on how quickly the soil warms and dries.Peas planted in cold soil(40 F) are slow to germinate.Later plantings made when the soil is warmer 60 F or more often catch up quickly with earlier plantings.Use raised beds if your soil is slow to drain. Make additional plantings through early - to mid - May, or plant varieties with different maturity dates to increase the harvest period. Plant seeds 1 to 2 inches deep, 1 to 4 inches apart in rows 18 inches apart.Or sow about 1 inch apart in a 3 - inch - wide band(about 25 seeds per foot).Shallow planting is best when soils are cool and wet.Plant deeper if soil is dry.A quick way to seed is to make a furrow or trench with a hoe, place seed in the furrow, cover and firm.Do not thin. Erect trellis for tall - growing, vining types at planting using chicken wire, brush or other suitable trellis material.If trellising, increase row spacing to 4 to 6 feet. Keep soil moist, but avoid heavy watering during flowering, which can interfere with pollination. Sow fall crops about 8 to 10 weeks before first frost date. Fall crops can be disappointing if hot weather persists. Do not use high- nitrogen fertilizers. Too much nitrogen will result in lush foliage but poor flowering and fruiting.</p>
       <span class="close">X</span>`,
    "peppers": `<h2>Growing Guide</h2> 
   
     <p>Pepper should be started indoor approximately 8 weeks prior to the last frost of the spring. Sow ¼ inch deep in a well-drained starting medium. Seeds require lots of warm to germinate; medium should be between 80-85 degrees F. Using a heat mat, available at home and garden store and elsewhere, can help to ensure ideal conditions. Additionally, young starts will fare much better with additional light. Place in a window or sunny location that receives lots of southern or southwestern sun exposure. Consider supplementing with artificial lighting if possible. Set plants out 2 to 3 weeks after average last frost when the soil has warmed and the weather has settled.Peppers can be temperamental when it comes to setting fruit if temperatures are too hot or too cool. Nighttime temperatures below 60 F or above 75 F can reduce fruit set. Plant them 12 to 24 inches apart, in rows 24 to 36 inches apart, or spaced about 14 to 16 inches apart in raised beds. Do not rush to transplant your starts outdoors. Peppers will do best with soil that is fertile, lightweight, slightly acidic(pH5.5- 7.0) and well - drained. Wait until soil temperatures exceed 50 degrees F at all times before placing into the ground. </p>
      
      <h2> MAINTAINING </h2>
      <p> Peppers need a steady supply of water for best performance.If fertilizing, be careful not to overdo it on nitrogen as this can deter fruit growth.Organic fertilizers and soil should be rich in phosphorus, potassium and calcium. Mulching with black plastic or similar material is a good way to maintain heat and soil moisture.</p>
       <span class= "close"> X</span>`,
    "potato": `Growing Guide 
   
     <p>Requires at least 6 hours of sun each day. Prefers well- drained, light, deep, loose soil, high in organic matter.Unlike most vegetables, potatoes perform best in acid soil with pH 4.8 - 5.5. Needs plentiful, consistent moisture. Late spring frosts can damage foliage, but growth will usually rebound quickly from underground parts.</p>
      
       <h2> MAINTAINING </h2>
       
        <p> Potatoes perform best in areas where summers are cool(65 F to 70 F), but are widely adapted. Potatoes require well- drained soil. If your soil is poorly drained or a heavy clay, consider using raised beds.Adding organic matter is a good way to improve soil before growing potatoes.Go easy on organic matter sources high in nitrogen and nitrogen fertilizer as too much nitrogen can encourage lush foliage at the expense of tuber production. Buy certified disease-free seed potatoes from garden centers or through online or mail-order catalogs for best results. If you save your own seed potatoes, discard any that show any signs of disease. Avoid planting potatoes from the supermarket because they may have been treated with sprout inhibitors. If you must use supermarket potatoes, use round, white Maine-grown potatoes. To see if they'll sprout, take three potatoes and put them in a paper bag and place the bag in a warm location (about 70 F). They should sprout in two weeks if they haven't been treated with sprout inhibitors. Cut seed potatoes that are larger than a chicken egg into pieces about 1 inch across or slightly larger.Each piece should have at least one “eye”. Traditionally, cut seed potato pieces are allowed to cure for a few days to a few weeks before planting.This is because the cut potatoes need high humidity, plenty of oxygen and temperatures between 50 F and 65 F to heal quickly.</p>
         <span class= "close">X</span>`,
    "pumpkin": `<h2>Growing Guide</h2> 
        
        <p>Prefers well-drained, fertile, loose soil, high in organic matter with pH between 5.8 and 6.8.Plentiful and consistent moisture is needed from the time plants emerge until fruits begin to fill out. If you have plenty of space, good soil and a long enough growing season, pumpkins are easy to grow. Most varieties grow on vines that spread 8 feet or more.Even smaller bush types spread 5 feet or more.</p>
         
         <h2> MAINTAINING </h2>
          <p> Pumpkins like warm soil and are very sensitive to frost.
          So don’t be in a rush to plant early in spring.
          Wait until danger of frost has passed and soil has warmed to about 70 F, or about 2 weeks after the last frost date.
           Instead, direct seed 1 to 1 1 / 2 inches deep into hills or rows. Sow 4 to 5 seeds per hill. Space hills about 4 to 8 feet apart, depending on the size of the vine. When the plants are 2 to 3 inches tall, thin to 2 to 3 plants per hill by snipping off unwanted plants without disturbing the roots of the remaining ones.In rows, sow seeds 6 to 12 inches apart in rows 6 to 10 feet apart.Snip off plants to thin to one plant every 18 to 36 inches. If you need to start plants early, plant inside in 2 - to 3 - inch pots or cells 3 to 4 weeks before transplanting outside.Sow 3 or 4 seeds per pot and thin to one or two plants by snipping off the weaker plants to avoid damaging the roots of those that remain.Harden off by cutting back on water and reducing temperature before transplanting.Plant transplants out in the garden at the same final spacings above after all danger of frost has passed. Black plastic mulch can speed growth, especially in cool, short - season areas.</p>
           <span class= "close"> X</span>`,
    "radish": `<h3>Growing Guide </h3> 
       
     <p>Yields best in full sun. Prefers well- drained, loose soil, high in organic matter, free from stones, with pH 5.8 to 6.8.Needs plentiful, consistent moisture. A few winter radish varieties are biennials. <br/> <br/> MAINTAINING <br/> Grows best in cool(50 F to 65 F), moist weather.Hot weather reduces quality and increases pungency.Late plantings may bolt before edible root forms. About 3 to 6 weeks before average last frost, direct seed ½ inch deep, 1 inch apart, in rows 12 inches apart.Thin to about 2 - inch spacings.Crowded plants may not produce high - quality roots.Use thinings in salads. For continuous harvest, make additional plantings every 1 to 2 weeks until temperatures average in the mid 60s F, or plant varieties with different maturity dates in a single planting.Resume planting when weather cools in fall. Plant most winter varieties so that they mature around the first fall frost date. (Frost improves flavor and texture of most winter varieties.) Larger winter varieties need more space than spring varieties, so thin to about 6 - inch spacings, depending on variety. Keep soil moist for uninterrupted growth and best quality. Adding nitrogen fertilizer or nitrogen rich manure close to planting may produce lush tops and small roots. Can be sown in the same row with carrots, parsley, parsnips and other slow germinating crops.The radishes help to break soil crust for the weaker and later - germinating crops. Because they mature quickly, radishes make a good intercrop along with slower growing crops, such as other cabbage family crops, or tomato - or squash family crops.Or follow radish harvest with summer succession crops such as beans, or fall - harvested crops. To help reduce disease, do not plant radishes or other cole crops in the same location more than once every three or four years.</p>
      <span class= "close">X</span>`,
    "spinach": `<h2>Growing Guide</h2> 
        
     <p>Well-drained, fertile soil, high in organic matter.Plentiful, consistent moisture.Tolerates slightly alkaline soils but is sensitive to acid soils.pH should be at least 6.0, but preferably in the 6.5 to 7.5 range. Must be planted early and grown when temperatures are cool.Needs consistent moisture.Will go to see(bolt) if too dry, or when days lengthen and temperatures warm.</p>
      <h3>MAINTAINING </h3> 
      <p> Early planting is critical as dry soil, heat and lengthening days also encourage bolting.Later plantings benefit from some light shade from other crops.Follow early plantings with warm - season crops such as tomatoes or beans. Make succession plantings every week or two until average last frost date.Use bolt- resistant varieties for later plantings.Sow again in mid - to late summer for fall harvest. pre - germinate seeds by placing them between sheets of moist paper towel in a plastic bag and refrigerating until they sprout. Start transplants inside about 3 to 6 weeks before last frost. Spinach is shallow - rooted and requires consistent moisture to prevent bolting. Water to keep soil moist. Mulch after plants are well established to maintain moisture and suppress weeds. Use floating row covers to prevent insect damage. Do not overfertilize with nitrogen. Only apply supplemental fertilizer if leaves are pale green.Add lime to make sure pH is at least 6.0.You should suspect that your soil is too acid if germination is poor and leaf tips and margins are yellow or brown. Plant in fall and mulch heavily for early spring crop.</p>
      <span class= "close">X</span>`,
    "squash": `<h2>Growing Guide </h2> 
    
     <p>Prefers well-drained, fertile, loose soil, high in organic matter with pH between 5.8 and 6.8. Plentiful and consistent moisture is needed from the time plants emerge until fruits begin to fill out. Most varieties grow on vines that spread 6 feet or more. If space is tight, choose smaller bush or semi - bush varieties. </p>
     <h3> MAINTAINING </h3>
     <p> Winter Squash </p> 
     <p>Direct seed ½ to 1 inch deep into hills or rows. Sow 4 to 5 seeds per hill. Space hills about 4 to 8 feet apart, depending on the size of the fruit. (The larger the expected size of the squash, the larger the vine and the farther apart you should space the hills.)   When the plants are 2 to 3 inches tall, thin to 2 to 3 plants per hill by snipping off unwanted plants without disturbing the roots of the remaining ones. In rows, sow seeds 6 to 12 inches apart in rows 4 to 8 feet apart. Snip off plants to thin to one plant every 18 to 36 inches. </p>
       <p> Summer Squash </p> 
       <p>Direct seed ½ to 1 inch deep into hills or rows. Sow 4 to 5 seeds per hill. When the plants are 2 to 3 inches tall, thin to 2 to 3 plants per hill by snipping off unwanted plants without disturbing the roots of the remaining ones. In rows, sow seeds 4 inches apart in rows 4 to 5 feet apart. Snip off plants to thin to one plant every 12 to 24 inches.</p>
        <span class= "close">X</span>`,
    "watermelon": `<br/><br/> <p>As they require a long growing season, watermelons are best started indoors approximately 3-4 weeks prior to the last frost of the season. Sow seeds 1/4 inch deep in flats or small pots, sowing 3 seeds per pot.Keep medium moist while awaiting germination.Additionally, watermelon seeds will show better germination rates with heat.Keep the soil between 80-90 degrees, using a heat mat if necessary.Seed should begin to germinate within 3-10 days. Once seeds start to germinate, lower soil temp slightly to the mid 70s, for 1 - 2 weeks, also decreasing water.Thin to one plant per cell or pot.Once the first set of true leaves has developed, reduce waterings once more, but do not allow plant to become desiccated. Harden plant by gradually exposing to outdoor conditions.Transplant to permanent site in late spring after the last frost has passed.If possible, transplant on an overcast day to minimize wilting and create a more amenable environment for your young plant. </p>
     
      <p> For transplanting, sow seeds indoors ¼ inch deep in peat pots (2-inch square or bigger), 2 to 4 weeks before setting out. Plants should have one or two true leaves when transplanted. Transplant at same spacings as direct- seeded crops - 2 to 3 plants per hill in hills spaced 4 to 6 feet apart, or 1 to 2 feet apart in rows 5 feet apart.Transplants are delicate and roots are sensitive to disturbance.If you need to thin, use scissors.Keep soil intact around plant when transplanting. </p>
       <span class= "close">X</span>`,
    "tomato": ` <h2>Growing Guide</h2> 
    
     <p>Tomatoes require a long growing season, and are best started indoors 6 weeks before the anticipated transplanting date(after the final frost of the spring).For best results, sow seeds ½ inch deep in a well-drained, soilless starting mix. Seeds require warm soil between roughly 65-90 degrees F. Warmer soils will promote faster germination. Keep soil moist, but not soggy while awaiting germination. Moderate watering slightly once seedlings break through the soil. Tomato plants prefer well-drained, fertile soil, high in organic matter. Fertile clays and loams produce the highest yields, but lighter soils that drain and warm quickly can produce earlier harvests. It can tolerate slightly acidic soils, and is most productive with pH 6.0 to 6.8. <br/><br/> Tomato is a heavy feeder and should be fertilized with an organic blend rich in phosphorus and potassium, and containing moderate nitrogen. </p>
     
       <p> Tomatoes need at least 8 hours of direct sun daily, and will develop faster with increased exposure. If possible, grow on a slight slope with southern or southeastern exposure. Tomatoes are native to tropical regions, and have the greatest light needs of any standard garden vegetable. <br/><br/> Staked and pruned plants can grow to well over 6 feet tall in favorable growing seasons, can be trained to narrow spreads. If space is limiting, use smaller determinate varieties. </p>
       
          <p>Wait at least a week or two after the last frost to transplant.</p>
          <span class= "close">X</span>`,
    "turnip": `<h2>Growing Guide</h2> 
   
     <p>Prefers well- drained, fertile soil high in organic matter, pH 6.0 to 7.5.Can tolerate slightly alkaline soil.Needs plentiful, consistent moisture.Loosen soil deeply or grow in raised beds to encourage good root development.Will tolerate less - than - ideal conditions, but poor soil will slow growth and hurt quality and flavor. </p>
     
      <h2> MAINTAINING </h2> 
     
      <p> From early spring to late summer, sow seeds ¼ to ½ inch deep, 1 inch apart in rows 12 to 18 inches apart. Thin plants to 4- to 6-inch spacings. Plant every 2 weeks for continuous harvest.Quality and flavor are best if harvested when whether is cool. Use floating row cover to protect crop from early pests. To help reduce disease, do not plant turnips or other cole crops in the same location more than once every three or four years.</p>
       <span class= "close">X</span>`,
    "zucchini": `<h2>Growing Guide</h2> 
   
     <p>Prefers well- drained, fertile, loose soil, high in organic matter with pH between 5.8 and 6.8.Plentiful and consistent moisture is needed from the time plants emerge until fruits begin to fill out. <br/> <br/> Direct seed ½ to 1 inch deep into hills (which warm and drain earlier in the season) or rows. Sow 4 to 5 seeds per hill. Space hills 3 to 4 feet apart. When the plants are 2 to 3 inches tall, thin to 2 to 3 plants per hill by snipping off unwanted plants without disturbing the roots of the remaining ones. In rows, sow seeds 4 inches apart in rows 4 to 5 feet apart. Snip off plants to thin to one plant every 12 to 24 inches. </p>
    
      <p> For extra early crops, start inside in 2- to 3-inch pots or cells 3 to 4 weeks before transplanting outside. Sow 3 or 4 seeds per pot and thin to one or two plants by snipping off the weaker plants to avoid damaging the roots of those that remain. Harden off by cutting back on water and reducing temperature before transplanting. Plant transplants out in the garden about 1 to 2 feet apart after all danger of frost has passed.</p> 
      <span class= "close">X</span>`
}

function plantActive(name, object) {
    let nameGuide = object[name];
}

function onPlantClick() {
    let name = event.currentTarget.getAttribute('data-plant');
    let nameGuide = plantData[name]

    let plantGuide = document.querySelector('.plant-guide');
    let plantDetail = document.querySelector('.plant-detail');

    plantDetail.innerHTML = nameGuide

    let plantClose = document.querySelector('.close');

    plantClose.addEventListener('click', function () {
        plantGuide.classList.remove('active');
    })

    plantGuide.classList.add('active');
}
