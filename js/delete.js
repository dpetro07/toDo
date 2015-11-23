$(document).ready(function()  {
    $(".btn-success").on("click", function(e) {
        e.preventDefault();

        /*To Do list Input and Button*/
        var newWord = $("#newWord").val().trim();
        /*Do not allow words to be duplicated*/
        var isDuplicate = false;
        $("td.word-td").each(function() {
            if($(this).text().trim().toLowerCase() === newWord.toLowerCase()) {
                isDuplicate = true;
             return; 
            }
        });

        if(isDuplicate) {
            $(".alert-danger").slideDown();
            return;
        }




        
        var newRow = $("<tr>");
        var wordTd = $("<td>").append(newWord);
        var deleteBtn = $("<button>").append("Delete");
        var deleteTd = $("<td>").append(deleteBtn);
        var completedBtn = $("<button>").addClass("btn btn-primary").append("I'm Finished"); 
        var completedTd = $("<td>").addClass("completeTd").append(completedBtn); 


        newRow.append(wordTd);
        newRow.append(deleteTd);
        newRow.append(completedTd);
        $("tbody").append(newRow);

        deleteBtn.addClass("btn btn-danger");
        $("#newWord").val("").focus();
    });

    /*This is so that when you press the Delete button on the To Do list the whole row gets deleted*/
    $("table").on("click", ".btn-danger", function() {
        if($("tr").length >1){
            $(this).parent().parent().remove();
        }
    });

    /*This is so that when you press the I'm Finished button on the list a line gets put through that row*/
    $("table").on("click" , ".btn-primary" , function() {
        $(this).replaceWith($("<p>").addClass("strike").append("Finished"));
        $("p").parent().prev().prev().css("text-decoration", "line-through");
    });




});