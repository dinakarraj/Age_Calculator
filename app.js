document.getElementById("submit").addEventListener("click", function () 
{
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);


    const day_error=document.querySelectorAll(".error_msg")[0];
    const month_error=document.querySelectorAll(".error_msg")[1];
    const year_error=document.querySelectorAll(".error_msg")[2];

    const day_input=document.getElementById("day");
    const day_label=document.getElementById("day_label");

    const month_input=document.getElementById("month");
    const month_label=document.getElementById("month_label");

    const year_input=document.getElementById("year");
    const year_label=document.getElementById("year_label");


    let error_array=[day_error, month_error, year_error];
    let isValid=true;

    error_array.forEach(error => {
        error.style.display="none"
    });

    [day_input, month_input, year_input].forEach(input => {
        input.classList.remove("error_styling");
    });

    [day_label, month_label, year_label].forEach(label => {
        label.classList.remove("error_label");
    });

    if(!day || day < 1 || day > 31)
    {
        day_error.style.display="block";
        day_input.classList.add("error_styling");
        day_label.classList.add("error_label");

        isValid=false;
    }

    if(!month || month<1 || month>12)
    {
        month_error.style.display="block";
        month_input.classList.add("error_styling");
        month_label.classList.add("error_label");
        isValid=false;
    }

    

    const today=new Date();
    if(!year || year>today.getFullYear() || year<0)
    {
        year_error.style.display="block";
        year_input.classList.add("error_styling");
        year_label.classList.add("error_label");
        isValid=false;
    }

    if(!isValid){return;}

    const inputDate=new Date(year, month-1, day);

    if(isNaN(inputDate.getTime()) || inputDate>today || inputDate.getDate()!==day)
    {
        day_error.style.display = "block";
        return;
    }

    let diff_years=today.getFullYear()-inputDate.getFullYear();
    let diff_months=today.getMonth()-inputDate.getMonth();
    let diff_days=today.getDate()-inputDate.getDate();

    if(diff_days<0)
    {
        diff_months--;
        const previous_month=new Date(today.getFullYear(), today.getMonth(), 0);
        diff_days += previous_month.getDate();
    }

    if(diff_months<0)
    {
        diff_years--;
        diff_months+=12;
    }

    document.getElementById("year-result").textContent=diff_years;
    document.getElementById("month-result").textContent=diff_months;
    document.getElementById("days-result").textContent=diff_days;
});




