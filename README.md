# Employee Management

## Table of Contents
- [Setting Up the Application](#setting-up-the-application)
- [Interacting with the User Interface](#interacting-with-the-user-interface)
- [Testing](#testing)
- [Using Git for Version Control](#using-git-for-version-control)

## Setting Up the Application

### 1. Prerequisites
- .NET SDK installed
- SQL Server (or any compatible database)

### 2. Clone the Repository
```bash
git clone https://github.com/sronak/EmployeeManagement.git
cd EmpMgmt_PulseSolution
```

### 3. Setup Database
Update the appsettings.json with your database connection string.
Apply migrations:
```bash
dotnet ef database update
```
OR
```
update-database
```

### 4.	Run the Application:
```bash
dotnet run
```

### 5.	Access the Application:
-	Open a browser and navigate to http://localhost:5000/Employees.

## Interacting with the User Interface
-	Create Employee: Click on "Create New" button, fill in the form, and click "Create".
  ![](https://sronak.github.io/my-gallery/media/original/AlbumName/Create%20New.png)
 	
 	![](https://sronak.github.io/my-gallery/media/large/AlbumName/CreateNewFrom.png)
 	
-	Edit Employee: Click on "Edit" next to an employee, modify the details, and click "Save".
  
  ![](https://sronak.github.io/my-gallery/media/large/AlbumName/EditEmpDetail.png)
 	
-	View Details: Click on "Details" next to an employee.
  
  ![](https://sronak.github.io/my-gallery/media/large/AlbumName/EmpDetail.png)
  
-	Delete Employee: Click on "Delete" next to an employee and confirm the deletion.

  ![](https://sronak.github.io/my-gallery/media/large/AlbumName/DeleteEmp.png)
 	![](https://sronak.github.io/my-gallery/media/large/AlbumName/DeleteEmp2.png)

## Testing

### 1.	Navigate to /Employees:
-	Ensure the list of employees is displayed correctly.
-	Test the Create, Edit, Details, and Delete links to make sure they lead to the correct pages.
  
### 2.	Create Employee:
-	Fill out the form and submit it.
-	Verify the employee is added to the list.

### 3.	Edit Employee:
-	Select an employee to edit.
-	Change the details and submit.
-	Verify the changes are saved and displayed correctly.

### 4.	View Details:
-	Click on the Details link for an employee.
-	Verify the details are displayed correctly.

### 5.	Delete Employee:
-	Select an employee to delete.
-	Confirm the deletion.
-	Verify the employee is removed from the list.

## Using Git for Version Control

### 1.	Initialize Git Repository:
```bash
git init
```

### 2.	Add Remote Repository:
```bash
git remote add origin https://github.com/sronak/EmployeeManagement.git
```

### 3.	Add and Commit Changes:
```bash
git add .
git commit -m "Initial commit"
```

### 4.	Push Changes to Remote Repository:
```bash
git push -u origin master
```
