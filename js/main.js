var categoryItems = document.getElementsByClassName("category_item");
for(var i = 0; i < categoryItems.length; i++)
{
    categoryItems[i].addEventListener("click", function(e)
        {
            for(var j = 0; j < categoryItems.length; j++)
            {
                categoryItems[j].classList.remove("category_item--active");
            }
            e.target.classList.add("category_item--active");
        }
    );
}
var productFilterButtons = document.getElementsByClassName("product_filter_btn");
for(i = 0; i < productFilterButtons.length; i++)
{
    productFilterButtons[i].addEventListener("click", function(e)
        {
            for(var j = 0; j < productFilterButtons.length; j++)
                productFilterButtons[j].classList.remove("button--active");
            e.target.classList.add("button--active");
        }
    );
}
