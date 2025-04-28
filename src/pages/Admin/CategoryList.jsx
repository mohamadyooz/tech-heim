import React, { useState, useEffect } from 'react'
import axios from 'axios'
const CategoryList = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();

  }, [])
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://testapi.beno.biz/api/apiproduct/categorylist')
      setCategories(response.data.Data);
    }
    catch (err) {
      setError(err.massege)
    }
    finally {
      setLoading(false)
    }
    if (loading) {
      return (
        <div>Loading...</div>
      )
    }
    if (error) {
      return (
        <div className='text-danger'>Error: {error}</div>
      )
    }
  }
  return (
    <div>
      <table className='table table-responsive'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {
            categories.map((category) => (
              <tr key={category.Id}>
                <td>{category.Id}</td>
                <td>{category.Title}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )

}

export default CategoryList