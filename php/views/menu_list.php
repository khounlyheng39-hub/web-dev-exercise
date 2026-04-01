<div class="container top-menu">
<h1 style="text-align: center;">Menu List</h1>

<a href= "new_menu" >add menu </a>
<a href= "/" >Top</a>

<?= $message ??''?>

   
<table>
    <thead>
       <tr>

         <th>ID</th>
         <th>Name</th>
         <th>Category</th>
         <th>Price</th>

       </tr>

    </thead>

    <tbody>
         <?php foreach ($menus as $menu): ?>
            <tr>
               <td><?=htmlspecialchars($menu['id']) ?></td>
               <td><?=htmlspecialchars($menu['name']) ?></td>
               <td><?=htmlspecialchars($menu['category']) ?></td>
               <td><?=htmlspecialchars($menu['price'])?>Riel</td>
               <td><a href="/edit_menu?id=<?= htmlspecialchars($menu['id']) ?>">Edit</a></td>

            </tr>
        <?php endforeach; ?>  

    </tbody>

</table>
         </div>