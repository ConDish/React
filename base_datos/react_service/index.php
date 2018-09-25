<?php

    $conn = new mysqli('localhost', 'root', '', 'posmarket_db');

    if(isset($_GET['op'])){

        $producto = $_GET['producto'];
        
        $sql = "SELECT * FROM productos WHERE nombre LIKE '%".$producto."%'";

        $result = $conn->query($sql);
    
        $array = [];

        if($result->num_rows > 0){

       
            while($row = $result->fetch_assoc()){
                $array[] = $row;
                
            }

            echo json_encode($array);

        }else{

            $array[] = array("nulo" => "true");

            echo json_encode($array);
        }



    }else{

        $sql = "SELECT * FROM productos";

        $result = $conn->query($sql);
    
        $array = [];
        
        while($row = $result->fetch_assoc()){
            $array[] = $row;
            
        }
    
        
    
        echo json_encode($array);

    }
   
    
?>