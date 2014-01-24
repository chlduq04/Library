function gnb_ajax_call( type, url, data, datatype, cache, ifsuccess, iferror ){
	$.ajax({
		type : type,
		url : base_url+url,
		data : JSON.stringify(data),
		dataType : datatype,
		cache : cache,
		success : function(data) {
			ifsuccess(data);
		},
		error : function(e){
			iferror(e);
		}
	});		
}

function easy_ajax_call( url, data, ifsuccess, iferror ){
	$.ajax({
		type : "POST",
		url : base_url+url,
		data : JSON.stringify(data),
		dataType : "json",
		cache : false,
		success : function(data) {
			ifsuccess(data);
		},
		error : function(e){
			iferror(e);
		}
	});		
}

function easy_get_ajax_call( url, ifsuccess, iferror ){
	$.ajax({
		type : "GET",
		url : base_url+url,
		dataType : "json",
		cache : false,
		success : function(data) {
			ifsuccess(data);
		},
		error : function(e){
			iferror(e);
		}
	});		
}