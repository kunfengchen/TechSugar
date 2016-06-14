using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Demo.DatabaseContext.Entries
{
    public class PointEntry
    {
        [Key]
        public int Id { get; set; }
        [Index("IX_PointEntry_PointUniqueID", IsUnique = true, Order = 1)]
        [MaxLength(100)]
        public string ModelId { get; set; }
    }
}