users [
	{
		user_id : '',
		user_name : '',
		password : '',
		is_Active : '',
		user_role : '',
		registartion : {
			first_name : '',
			last_name : '',
			age : '',
			gender : '',
			mobile_number : '',
            email_Id : '',
            country : '',
            state : '',
            profession : '',
            pincode : '',
            rec_crt_ts : '',
            rec_upd_ts : ''
		}
	}
]



products [
	{
		product_id : '',
		product_name : '',
		product_price : '',
		product_MRP : '',
		product_offer_text : '',
		product_brand : '',
		product_img_url : '',
		rec_crt_ts : '',
        rec_upd_ts : ''
	}
]


cart [
	{	
		user_id : '',
		cartd_id : '',
		product_id : '', 
		quantity : '', 
		rec_crt_ts : '',
		rec_updt_ts : '',
		cart_total : '',
		order_id : '',
		is_check_out : ''		
	}
]


cards [
	{
		cvc: '',
        expiry: '',
        card_holder_name: '',
		number: '',
		user_id : ''
	}
]


orders [
	{
		order_id : '',
		total : '',
		user_id : '',
		card_no : '',
		rec_crt_ts : '',
		rec_updt_ts : '',
	}
]

