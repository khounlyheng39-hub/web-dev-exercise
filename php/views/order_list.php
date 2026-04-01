<h1>Order List</h1>

<a href="/" class="button">Top</a>

<form action="order_list" method="get">
  <input type="date" name="$cond_date" value=<?= htmlspecialchars($cond_date) ?> />
  <button type="submit">search</button>
</form>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Order Datetime</th>
      <th>Customer Name</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach ($orders as $order): ?>
      <tr>
        <td><a href="/order_detail?id=<?= htmlspecialchars($order['id']) ?>"><?= htmlspecialchars($order['id']) ?></a></td>
        <td><?= htmlspecialchars($order['orders_at']) ?></td>
        <td><?= htmlspecialchars($order['customer_name']) ?></td>
      </tr>
    <?php endforeach; ?>
  </tbody>