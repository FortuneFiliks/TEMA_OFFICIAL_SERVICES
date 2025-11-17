$(".menu").toggle(view_Menu, close_Menu);

function view_Menu(){
	$(".mobile_menu_section").css({"display":"block"});
	$(":root").css({"overflow-y":"hidden"});
}

function close_Menu(){
	
	$(".mobile_menu_section").css({"display":"none"});
	$(":root").css({"overflow-y":"visible"});
}


//TEXT ANIMATION


const ecotourism_Text = document.querySelectorAll(".second_section_flex_right_item,.third_section_flex_right_item, .fourth_section_flex_right_item, .fifth_section_flex_right_item, .sixth_section_flex_right_item, .seventh_section_flex_right_item");



function animate_Ecotourism_Text(entries){
    entries.forEach(
	    (entry) => {
            if(entry.isIntersecting){
			    entry.target.classList.add("char_animated");
			    observer.unobserve(entry.target);				
			}

		});
}


const  animate_Ecotourism_Text_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
}


const observe_Ecotourism_Text = new IntersectionObserver(animate_Ecotourism_Text, animate_Ecotourism_Text_Root);
ecotourism_Text.forEach((target) => observe_Ecotourism_Text.observe(target));




//FLEX ITEM ANIMATION



let get_Flex_Left_Item = document.querySelectorAll(".second_section_flex_left_item, .third_section_flex_left_item, .fourth_section_flex_left_item, .fifth_section_flex_left_item, .sixth_section_flex_left_item,.seventh_section_flex_left_item");


function flex_Left_Item_Animation(entries){
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("flex_left_item_animation_class");
			observer.unobserve(entry.target);
		}
		
	});
}


const flex_Left_Item_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
}


const flex_Left_Item_API = new IntersectionObserver(flex_Left_Item_Animation, flex_Left_Item_Root);

get_Flex_Left_Item.forEach( (target) => { flex_Left_Item_API.observe(target)});