/*Name: Connor McLaughlin
CS Username: cmclaugh
Email: Connor_McLaughlin@student.uml.edu
Student ID: 01372970
*/
/*When you load the page make a default table of 10x10 */
createTable();

/*Wait until the page is ready to load. */
$(document).ready(function(){
	$("#data").validate({
		rules: {
			/*Rules for all */
			x_start: {
				required:true,
				digits:true,
				range: [0, 150]
			},
			x_end:   {
				required: true,
				digits: true,
				range: [0, 150]
			},
			y_start: {
				required: true,
				digits: true,
				range: [0, 150]
			},
			y_end:   {
				required: true,
				digits: true,
				range: [0, 150]
			}
		},
		/*Custom messages for all inputs */
		messages: {
			x_start:  {
				required: "This field is required",
				digits: "This field requires positive digits",
				range: "this field has a min value of 0 and a max of 150"
			},
			x_end:    {
				required: "This field is required",
				digits: "This field requires positive digits",
				range: "this field has a min value of 0 and a max of 150"
			},
			y_start:  {
				required: "This field is required",
				digits: "This field requires positive digits",
				range: "this field has a min value of 0 and a max of 150"
			},
			y_end:    {
				required: "This field is required",
				digits: "This field requires positive digits",
				range: "this field has a min value of 0 and a max of 150"
			}
		},
	});
/* Stops page from refreshing */	
$("#data").on("submit", function() {
	return false;
});
/*If the data is valid its okay to call my createTable function from HW6 */
$("#data .btn").click(function(){
	if(!$("#data").valid()){
		return;
	}
	createTable();
});
});

function createTable() {
	/*Variable which will contain table element */
	var table= "<tr>";
	/*Counters */
	var i,j,k;
	/* Flag indicating first runthrough */
	var go = true;
	var temp;


	/* Sets the x and y variables equal to the values in the forms */
	xStart = Number(document.getElementById("x_start").value);
	xEnd = Number(document.getElementById("x_end").value);

	if(xStart > xEnd){
		temp = xEnd;
		xEnd = xStart;
		xStart = temp; 
	}

	yStart = Number(document.getElementById("y_start").value);
	yEnd = Number(document.getElementById("y_end").value);

	if(yStart > yEnd){
		temp = yEnd;
		yEnd = yStart;
		yStart = temp; 
	}


	/* If the input fails exception handling exit the program */

	/*Start at the row start stop when you get to the row stopping point */
	for(i = yStart; i <= yEnd; i++){
		/* If this is the first run through we need to format the first row co
		   correctly  */
		if(i==yStart){
				table+="<td>XX</td>";
				for(k = xStart; k <= xEnd;k++){
					table += "<td>"+k+"</td>";
				}
				table += "</tr>"
			}
		/*Otherwise just add a need row object and the first object in the
		  collumn */    
		else{   
			table += "<tr><td>" + i + "</td>";
		}
		/* While you still need to add collumns add collumns */
		for(j = xStart; j <= xEnd; j++){
			/* IF this is the very first run through we need to print the value */
			if(go){
				table += "<td>" + yStart + "</td>";
				go=false;
			}
			/* print the product of the coordinates */
			table += "<td>" + (i*j) + "</td>";
		}
		/* finish the row */
		table += "</tr>"


	}

	//table += "</tr>";
	document.getElementById("mult_table").innerHTML = table;
	//document.getElementById("demo").innerHTML = table;


}
