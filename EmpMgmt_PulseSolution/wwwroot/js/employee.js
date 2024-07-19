$(document).ready(function() {
    // Edit Employee
    $("#editForm").on("submit", function(event) {
        event.preventDefault();
        
        var id = $("#EmployeeId").val();
        var employee = {
            EmployeeId: id,
            FirstName: $("#FirstName").val(),
            LastName: $("#LastName").val(),
            Email: $("#Email").val(),
            Phone: $("#Phone").val(),
            Department: $("#Department").val(),
            HireDate: $("#HireDate").val()
        };
        
        $.ajax({
            url: `/Employees/EditApi/${id}`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(employee),
            success: function(response) {
                alert('Employee updated successfully!');
                window.location.href = '/Employees/Index';
            },
            error: function(error) {
                alert('Error updating employee.');
                console.log(error);
            }
        });
    });
    
    // Delete Employee
    $(".deleteButton").on("click", function(event) {
        event.preventDefault();
        
        if (!confirm("Are you sure you want to delete this employee?")) {
            return;
        }
        
        var id = $(this).data("id");
        
        $.ajax({
            url: `/Employees/DeleteApi/${id}`,
            type: 'POST',
            success: function(response) {
                alert('Employee deleted successfully!');
                window.location.href = '/Employees/Index';
            },
            error: function(error) {
                alert('Error deleting employee.');
                console.log(error);
            }
        });
    });
});
