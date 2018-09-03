let gameDifficulty = location.hash;//location.hash is use to get the hash value from URL
let createRows = 0; //We use this for increment rows
let createColumns = 0; //We use this for increment columns
let minesArray = []; //This array contain mines
let tableRowAndColumn = [];
let totalColumns;//Store total number of rows
let totalRows;//Store total number of columns
let gameOver = false;
if(gameDifficulty=="#beginner")
{
totalRows = 5; //Total row which we want to generate
totalColumns = 5; //Total Column which we want to generate
}
else if(gameDifficulty=="#intermediate")
{
totalRows = 12; //Total row which we want to generate
totalColumns = 20; //Total Column which we want to generate
}
else
{
totalRows = 14; //Total row which we want to generate
totalColumns = 30; //Total Column which we want to generate    
}
//This method will generate table by using Recursion
function tableGenerator()
{
    createRows = 0; //We use this for increment rows
    createColumns = 0; //We use this for increment columns
    let table = document.createElement("Table"); //Create Table
    
    table.setAttribute("id", "myTable"); //Set id of Table , myTable

    document.body.appendChild(table); //Appending Table with Body
    
    //This method will insert row in table
    function insertRow()
    {

        let tableRow = document.createElement("tr"); //Create new Row

        tableRow.setAttribute("id",'row'+createRows); //set Id of table row , myTr

        document.getElementById("myTable").appendChild(tableRow); //Append tablerow with table

        while(createRows < totalRows)
        
        {
            createRows++;

        
        //This method will insert column
        function insertColumn()
        {
            let decrementRow = createRows-1;
            while(createColumns < totalColumns)
            {

                let tableData = document.createElement("TD"); //Create new column

                tableData.setAttribute("id",createRows+' '+createColumns); //set id of created column

                tableData.onclick = function(){
                    checkState(tableData.id)
                }; //set onclick on column
                
                document.getElementById('row'+decrementRow).appendChild(tableData); //append column to row

                tableRowAndColumn.push(createRows+ ' '+createColumns);

                createColumns++;

            }

            createColumns=0;

        }

        insertColumn();
        insertRow();

        }

    }

    insertRow();
}

tableGenerator(); //Invoke tableGenerator()

//This method will add mines on startup
function addMine()
{
    let createColumns=0;
    let createRows=1;
    //This method will add mine in random row of random column
    function MineRow()
    {
          while(createRows<Math.round(6+Math.random()*(totalRows-6)))
          {
             function MineColumn()
              {
                  while(createColumns<Math.round(10+Math.random()*(totalColumns-10)))
                  {
                      minesArray.push((Math.round(1+Math.random()*(totalRows-1))+' '+Math.round(Math.random()*(totalColumns-1))));
                      createColumns++;
                  }
              }
              MineColumn();
              createRows++;
          }
    }
    MineRow();
}
addMine();

function addMineToTable()
{

    for(let i=0; i<(totalRows*totalColumns);i++)
    {
        for(var j in tableRowAndColumn)
        {
            if(tableRowAndColumn[j]==minesArray[i])
            {
                tableRowAndColumn[j].slice(j,1);
                tableRowAndColumn[j] = "MINE";
            }
        }
    }
}
addMineToTable();

//This method will check boxes 
function checkState(Id)
{
    let counter = 0;
    let neighborMineChecker = [];
    let SpaceIndex = Id.indexOf(' ');
    let selectedRow = Id.substring(0,SpaceIndex);
    let selectedColumn = Id.substring(SpaceIndex+1,Id.length);
    let rowInInteger = parseInt(selectedRow);
    let columnInInteger = parseInt(selectedColumn);
    let indexOfArrayTable = tableRowAndColumn.indexOf(Id);
    document.getElementById(Id).style.backgroundColor='white';
        function mConnectivity()
        {
            for(let i=rowInInteger; i<=(rowInInteger+2);i++)
            {
                for(let j=columnInInteger; j<=(columnInInteger+2);j++)
                {
                    neighborMineChecker.push((i-1)+' '+(j-1));
                    console.log(neighborMineChecker);
                }
            }
        }
        mConnectivity();
        minesArray.map(function(idChecker,index)
       {
        if(Id === idChecker)
        {
            showAllMines();
        }
        else
        {
            for(let i in neighborMineChecker)
            {
               if(neighborMineChecker[i]===idChecker)
                 {
                counter++;
                }
            }
        }
    })
       if(counter>0 && gameOver==false)
{
        document.getElementById(Id).innerHTML=counter;
        counter=0;
}
    for(let i=indexOfArrayTable ; i<tableRowAndColumn.length;i++)
        {
            if(tableRowAndColumn[i]!="MINE")
            {
                document.getElementById(tableRowAndColumn[i]).click();
                document.getElementById(tableRowAndColumn[i]).style.backgroundColor='white';
            }
            else
            {
            break;
            }
        }
}

//Show all mines
function showAllMines()
{
       minesArray.map(function(id)
        {
            document.getElementById(id).innerHTML='M';
            document.getElementById(id).style.backgroundColor='red';
        })
        alert('Game Over !');
        gameOver = true;
}