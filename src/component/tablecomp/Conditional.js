import { useState, useEffect } from 'react'
import TabJS from './TableComp'
import { categories } from '../../Tables/categories'
import { customers } from '../../Tables/customers'
import { products } from '../../Tables/products'
import { regions } from '../../Tables/regions'
import { shippers } from '../../Tables/shippers'
import { suppliers } from '../../Tables/suppliers'
import { territories } from '../../Tables/territories'
import { catkey } from './KeyComp'
import { cuskey } from './KeyComp'
import { prodkey } from './KeyComp'
import { regkey } from './KeyComp'
import { shipkey } from './KeyComp'
import { suppkey } from './KeyComp'
import { terrkey } from './KeyComp'

const Conditional = ({ table }) => {
  const [tableData, setTableData] = useState({ colData: [], rowData: [] })
  useEffect(() => {
    setTableData({
      colData: table === "categories" ? catkey
        : table === "customers" ? cuskey
          : table === "products" ? prodkey
            : table === "shippers" ? shipkey
              : table === "suppliers" ? suppkey
                : table === "territories" ? terrkey
                  : table === "regions" ? regkey
                    : [],
      rowData: table === "categories" ? categories
        : table === "customers" ? customers
          : table === "products" ? products
            : table === "shippers" ? shippers
              : table === "suppliers" ? suppliers
                : table === "regions" ? regions
                  : table === "territories" ? territories
                    : []
    })
  }, [table])
  return (
    <div>
      <TabJS
        tableColData={tableData.colData}
        tableRowData={tableData.rowData}
      />
    </div>
  )
}

export default Conditional